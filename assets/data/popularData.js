import Images from '../images/images'
const popularData = [
  {
    id: '1',
    image: Images.pizza1,
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: 3.99,
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: Images.ham,
      },
      {
        id: '2',
        name: 'tomato',
        image: Images.tomato,
      },
      {
        id: '3',
        name: 'cheese',
        image: Images.cheese,
      },
      {
        id: '4',
        name: 'garlic',
        image: Images.garlic,
      },
    ],
  },
  {
    id: '2',
    image: Images.pizza2,
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '4.0',
    price: 5.99,
    sizeName: 'Small',
    sizeNumber: 10,
    crust: 'Thick Crust',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'cheese',
        image: Images.cheese,
      },
      {
        id: '2',
        name: 'garlic',
        image: Images.garlic,
      },
    ],
  },
  {
    id: '3',
    image: Images.pizza3,
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Large',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: Images.tomato,
      },
      {
        id: '2',
        name: 'cheese',
        image: Images.cheese,
      },
    ],
  },
];

export default popularData;