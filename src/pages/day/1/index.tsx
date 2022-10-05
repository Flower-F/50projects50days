import img1 from '~/assets/1/1.png'
import img2 from '~/assets/1/2.png'
import img3 from '~/assets/1/3.png'
import img4 from '~/assets/1/4.png'
import img5 from '~/assets/1/5.png'

interface ItemType {
  title: string
  source: string
}

const originalCardList: ItemType[] = [
  {
    title: 'Explore The World',
    source: img1,
  },
  {
    title: 'Wild Forest',
    source: img2,
  },
  {
    title: 'Sunny Beach',
    source: img3,
  },
  {
    title: 'City on Winter',
    source: img4,
  },
  {
    title: 'Mountains - Clouds',
    source: img5,
  },
]

const useExpand = () => {
  const state = useReactive({
    expandList: [true, ...new Array<boolean>(originalCardList.length - 1).fill(false)],
  })

  const expand = (index: number) => {
    state.expandList = new Array<boolean>(originalCardList.length).fill(false)
    state.expandList[index] = true
  }

  return {
    expand: useMemoizedFn(expand),
    expandList: state.expandList,
  }
}

const CardItem = ({ cardItem, expand, onClick }: { cardItem: ItemType; expand: boolean } & Partial<JSX.IntrinsicElements['button']>) => {
  return (
    <button className={expand ? 'grow-5' : 'grow-0.8'} onClick={onClick}
      relative transition-all-600 basis-0 mx-2
    >
      <img src={cardItem.source} alt={cardItem.title} h-80vh object-cover rounded-10vh shadow="gray2 dark:sm" />
      <h3 absolute left-20px bottom-40px text="xl left white" font-extrabold transition-all-50
        className={expand ? 'visible' : 'invisible'}
      >
        {cardItem.title}
      </h3>
    </button>
  )
}

const ExpandingCards = () => {
  const { expand, expandList } = useExpand()
  const responsive = useResponsive()

  let cardList = originalCardList
  if (!responsive.md) {
    cardList = originalCardList.slice(0, cardList.length - 2)
  }

  return (
    <div flex items-center justify-center>
      <div flex items-center className="w-90% !md:w-96%">
        {
          cardList.map((cardItem, index) => (
            <CardItem cardItem={cardItem} key={index} onClick={() => expand(index)} expand={expandList[index]} />
          ))
        }
      </div>
    </div>
  )
}

export default ExpandingCards
