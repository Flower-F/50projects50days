import type { KeyboardEvent } from 'react'

const IndexPage = () => {
  const [day, setDay] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleKeyDownEnter = useMemoizedFn((e: KeyboardEvent) => {
    if (e && e.code === 'Enter' && day) {
      navigate(`/day/${encodeURIComponent(day)}`)
    }
  })

  const handleClickEnter = useMemoizedFn(() => {
    if (day) {
      navigate(`/day/${encodeURIComponent(day)}`)
    }
  })

  return (
    <div>
      <div i-carbon-campsite text-4xl inline-block hover:op75 />
      <p>
        <a rel="noreferrer" href="https://github.com/flower-f/revitesse-lite" target="_blank">
          ReVitesse Lite
        </a>
      </p>

      <p>
        <em text-sm op75>Opinionated Vite Starter Template</em>
      </p>

      <div py-4 />

      <input
        id="input"
        placeholder="What's the day?"
        type="number"
        autoComplete="false"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        onKeyDown={handleKeyDownEnter}
        onChange={(e) => {
          const num = e.target.value
          if (num && Number.isNaN(num)) {
            setDay(null)
          }
          setDay(parseInt(num))
        }}
      />

      <div>
        <button m-3 text-sm className="btn" onClick={handleClickEnter} disabled={!day}>
          Go
        </button>
      </div>
    </div>
  )
}

export default IndexPage
