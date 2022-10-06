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

const CardItem = ({ cardItem, expand, onClick }: { cardItem: ItemType;expand: boolean } & Partial<JSX.IntrinsicElements['button']>) => {
  return (
    <li className={expand ? 'grow-5' : 'grow-0.6'} mx-2 basis-0 relative transition-all-600>
      <button onClick={onClick}>
        <img src={cardItem.source} alt={cardItem.title} h-80vh object-cover rounded-50px shadow="gray2 dark:sm" />
        <h3 absolute left-20px bottom-40px text="xl left white" font-extrabold transition="all-600 delay-100" className={expand ? 'op100' : 'op0'}>
          {cardItem.title}
        </h3>
      </button>
    </li>
  )
}

const ExpandingCardsPage = () => {
  const [expandIndex, setExpandIndex] = useState(0)
  const responsive = useResponsive()

  let cardList = originalCardList
  if (!responsive.md) {
    // 响应式处理，屏幕小的时候去掉最后两张卡片
    cardList = originalCardList.slice(0, cardList.length - 2)
  }

  return (
    <div flex items-center justify-center>
      <ul flex items-center className="w-96% md:w-90%">
        {
          cardList.map((cardItem, index) => (
            <CardItem
              cardItem={cardItem}
              key={index}
              expand={expandIndex === index}
              onClick={() => setExpandIndex(index)}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default ExpandingCardsPage
