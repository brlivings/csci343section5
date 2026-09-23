// menuData.js
// Holds the list of menu items shown on the MenuScreen.
// Each object has a unique id (used as the FlatList key), a name,
// a price, a short description, and an image loaded from assets/images.

const menuItems = [
  {
    id: 'm1',
    name: 'Margherita Pizza',
    price: 14.99,
    description: 'San Marzano tomato, fresh mozzarella, and basil.',
    image: require('../assets/images/margherita-pizza.png'),
  },
  {
    id: 'm2',
    name: 'Spaghetti Bolognese',
    price: 16.49,
    description: 'Slow-simmered beef ragù over spaghetti.',
    image: require('../assets/images/spaghetti-bolognese.png'),
  },
  {
    id: 'm3',
    name: 'Classic Lasagna',
    price: 17.99,
    description: 'Layers of pasta, meat sauce, ricotta, and mozzarella.',
    image: require('../assets/images/lasagna.png'),
  },
  {
    id: 'm4',
    name: 'Chicken Parmesan',
    price: 18.99,
    description: 'Breaded chicken, marinara, and melted cheese with pasta.',
    image: require('../assets/images/chicken-parmesan.png'),
  },
  {
    id: 'm5',
    name: 'Garlic Bread',
    price: 6.99,
    description: 'Toasted bread with garlic butter and parsley.',
    image: require('../assets/images/garlic-bread.png'),
  },
  {
    id: 'm6',
    name: 'Tiramisu',
    price: 8.49,
    description: 'Espresso-soaked ladyfingers with mascarpone cream.',
    image: require('../assets/images/tiramisu.png'),
  },
];

export default menuItems;
