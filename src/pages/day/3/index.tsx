import dogImage from '~/assets/3/dog.png'

const RotatingNavigationPage = () => {
  const [rotated, setRotated] = useState(false)

  return (
    <div flex items-center justify-center p-50px font-mono>
      <div fixed className="-top-100px -left-100px" z-10>
        <div h-200px w-200px rounded-full relative bg="#ff7979" transition-all-400 className={rotated ? '-rotate-90' : ''}>
          <button w-44px h-44px absolute left-123px top-126px text-white onClick={() => setRotated(true)}>
            <div i-charm-menu-hamburger w-34px h-34px bg-white font-bold></div>
          </button>
          <button w-44px h-44px absolute left-30px top-120px text-white onClick={() => setRotated(false)}>
            <div i-charm-cross w-44px h-44px bg-white font-bold></div>
          </button>
        </div>
      </div>

      <nav fixed left-40px bottom-40px>
        <ul text-lg>
          <li flex items-center transition-all-400 className={rotated ? '' : '-translate-x-120px'}>
            <div i-charm-home mr-2></div>
            HOME
          </li>
          <li flex items-center mt-20px ml-20px transition-all-400 className={rotated ? '' : '-translate-x-140px'}>
            <div i-charm-person mr-2></div>
            ABOUT
          </li>
          <li flex items-center mt-20px ml-40px transition-all-400 className={rotated ? '' : '-translate-x-180px'}>
            <div i-charm-mail mr-2></div>
            CONTACT
          </li>
        </ul>
      </nav>

      <article text-start max-w-1000px origin-left-top transition-all-400 className={rotated ? '-rotate-18' : ''}>
        <h1 text-4xl font-bold>Amazing Article</h1>
        <i text-sm>Florin Pop</i>
        <p mt-16px>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit
          dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus,
          illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
          labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
          veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
          Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
          sint nam quas dolor dignissimos in error placeat quae temporibus minus
          optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
          Ducimus consequuntur perferendis consequatur nobis exercitationem molestias
          fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
        </p>

        <h2 text-2xl font-bold my-12px>My Dog</h2>
        <img src={dogImage} alt="dog" w-full />
        <p mt-16px>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
          Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus
          dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea
          ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint,
          neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
      </article>
    </div>
  )
}

export default RotatingNavigationPage
