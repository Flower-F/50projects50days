const HiddenSearchPage = () => {
  const [hidden, setHidden] = useState(true)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useUpdateEffect(() => {
    if (!hidden && inputRef.current) {
      inputRef.current.focus()
    }
  }, [hidden])

  return (
    <div flex items-center justify-center h-70vh>
      <div h-50px flex items-center bg="#7d5fff" font-mono>
        <input bg="#7d5fff" outline-none text="black placeholder:black/50 xl" transition-all-400
          className={hidden ? 'w-0' : 'w-200px pl-10px'} type="text" placeholder="Search..." ref={inputRef}
        />
        <button flex ml-auto w-50px h-50px justify-center items-center onClick={() => setHidden(!hidden)}>
          <div bg-black w-30px h-30px i-charm-search></div>
        </button>
      </div>
    </div>
  )
}

export default HiddenSearchPage
