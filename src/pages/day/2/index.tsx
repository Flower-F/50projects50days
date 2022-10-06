const ProgressStepsItem = ({ step, lastStep }: { step: number; lastStep: number }) => {
  return (
    <li flex items-center>
      <div relative className={step > 0 ? 'bg-gray w-80px h-4px' : '' }>
        <div absolute transition-all-300 ease-in-out bg-blue top-0 left-0 h-4px className={step > 0 && lastStep >= step ? 'w-80px' : 'w-0'}></div>
      </div>
      <div w-8 h-8 rounded-full transition-all-300 ease-in-out flex items-center justify-center border-3 text-bluegray
        className={lastStep >= step ? 'border-blue' : 'border-gray'}
      >
        {step + 1}
      </div>
    </li>
  )
}

const ProgressSteps = ({ steps }: { steps: number }) => {
  const [stepIndex, setStepIndex] = useState(0)

  return (
    <div>
      <ul flex>
        {
          new Array(steps).fill(null).map((_, index) => (
            <ProgressStepsItem step={index} key={index} lastStep={stepIndex} />
          ))
        }
      </ul>
      <div mt-8>
        <button
        text-white rounded-2 p="x-30px y-6px" mr-4
          className={stepIndex <= 0 ? 'bg-gray cursor-not-allowed' : 'bg-#3498db hover:bg-#0f82c9'}
          onClick={() => {
            if (stepIndex - 1 >= 0) {
              setStepIndex(stepIndex - 1)
            }
          }}
        >
          Prev
        </button>
        <button
        text-white rounded-2 p="x-30px y-6px"
          className={stepIndex >= steps - 1 ? 'bg-gray cursor-not-allowed' : 'bg-#3498db hover:bg-#0f82c9'}
          onClick={() => {
            if (stepIndex + 1 < steps) {
              setStepIndex(stepIndex + 1)
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

const ProgressStepsPage = () => {
  return (
    <div flex items-center justify-center h-60vh>
      <ProgressSteps steps={4} />
    </div>
  )
}

export default ProgressStepsPage
