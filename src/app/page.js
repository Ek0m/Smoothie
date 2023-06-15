// import components

import Banner from './components/Banner';
import Product from './components/Product';

// menu data
const Smoothies = [
  {
    id: 1,
    name: 'Pineapple Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Vanilla.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Banana Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Banana.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Apple Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Vanilla.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Strawberry Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Strawberry.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'Chocolate Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Chocolate.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'Avocado Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Avocado.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'Vanilla Smoothie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/Vanilla.jpg',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  
];

const Solids = [
  {
    id: 1,
    name: 'Hot Dogs',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Chicken Burgers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Beef Burgers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Chicken Wraps',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'Beef Wraps',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'Combo Wraps',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'Waffles',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'Sandwiches',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
];

const Combos = [
  {
    id: 1,
    name: 'Chicke Wrap Meal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'Beef Wrap Meal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Burger Meal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'Sandwiches Meal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'Hotdog Meal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: '/capricciosa.webp',
    priceSm: 1000,
    priceMd: 1500,
    priceLg: 2500,
    mixtures: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return <section>
    <Banner />
    <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12 '>
            {Smoothies.map((smoothies) => {
                return <Product product={smoothies} />
            })}
        </div>
    </div>
  </section>;
}
