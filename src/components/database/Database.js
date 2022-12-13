export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };
  
  export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Carrot ',
      productPrice: 500,
      description:
        'sell fresh product from his/her own product',
      isOff: true,
      offPercentage: 10,
      productImage: require('../../../assets/image/carrot.jpeg'),
      isAvailable: true,
      productImageList: [
        require('../../../assets/image/carrot.jpeg')
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Maize ',
      productPrice: 600,
      description:
        'Hydrocarbon product are those rich in hydrocarbon-fats and oils. hydrocarbon of carbon, hydrogen, and oxygen ',
      isOff: false,
      productImage: require('../database/images/products/ibigori.jpeg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/ibigori.jpeg')
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'sweet patatos',
      productPrice: 1999,
      description:
        'The sweet potato or sweetpotato is a dicotyledonous plant that belongs to the bindweed or morning glory family, Convolvulaceae. Its large, starchy, sweet-tasting tuberous roots are used as a root vegetable.',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/products/sweetp.jpeg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/sweetp.jpeg'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'Mango',
      productPrice: 399,
      description:
        'A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated in the region between northwestern Myanmar, Bangladesh, and northeastern India.',
      isOff: false,
      productImage: require('../database/images/products/imyembe.jpeg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/imyembe.jpeg')
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'banana',
      productPrice: 1499,
      description:
        'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
      isOff: false,
      productImage: require('../database/images/products/banana.jpeg'),
      isAvailable: false,
      productImageList: [
        require('../database/images/products/banana.jpeg')
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Pineapple',
      productPrice: 1299,
      description:
        'The pineapple is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.',
      isOff: false,
      productImage: require('../database/images/products/inanasi.jpeg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/inanasi.jpeg')
      ],
    },
  ];