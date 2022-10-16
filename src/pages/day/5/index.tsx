import bg from '~/assets/5/bg.png'

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

const BlurryLoadingPage = () => {
  const [loadingNum, setLoadingNum] = useState(0)
  const loadingNumRef = useRef<HTMLDivElement | null>(null)
  const backgroundRef = useRef<HTMLImageElement | null>(null)

  const blurring = useCallback(() => {
    if (!loadingNumRef.current || !backgroundRef.current) {
      return
    }

    setLoadingNum(loadingNum => loadingNum + 1)
    loadingNumRef.current.style.opacity = String(scale(loadingNum, 0, 100, 1, 0))
    backgroundRef.current.style.filter = `blur(${scale(loadingNum, 0, 100, 30, 0)}px)`
  }, [loadingNum])

  useEffect(() => {
    if (loadingNum >= 100) {
      return
    }

    const timer = setTimeout(() => {
      blurring()
    }, 30)

    return () => {
      clearTimeout(timer)
    }
  }, [blurring, loadingNum])

  return (
    <div flex items-center justify-center h-90vh>
      <div bg-black p-10px relative shadow-gray shadow-sm rounded-2>
        <img src={bg} alt="" w="70%" object-cover ref={backgroundRef} />
        <div absolute top="1/2" left="1/2" text="white 4rem" font-bold className="-translate-x-1/2 -translate-y-1/2" ref={loadingNumRef}>
          {`${loadingNum}%`}
        </div>
      </div>
    </div>
  )
}

export default BlurryLoadingPage
