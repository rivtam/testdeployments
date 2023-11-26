module.exports = {
  // users must never have customer sensitive
  users: [
    { id: 1, avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp', name: 'Tammy', surname: 'Nkuna' },
    { id: 2, avatar: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp', name: 'Zoliswa', surname: 'Nkuna' },
  ],

  groceries: [
    {
      name: '20231101',
      shop: 'Checkers',
      dateTime: '2023-11-01 16:00:13',
      Priority: 'high',
      shopperId: 1,
      products: [
        {
          name: 'mayonnaise',
          price: 1700,
          size: '750',
          sizeUnits: 'g',
          quantity: 1,
        },
        {
          name: 'carrots',
          price: 5422,
          size: '2',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'Beetroot',
          price: 4311,
          size: '750',
          sizeUnits: 'g',
          quantity: 1,
        },
        {
          name: 'Rice',
          price: 9999,
          size: '2',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'Coldrink',
          price: 2122,
          size: '2',
          sizeUnits: 'l',
          quantity: 1,
        },
      ],
    },
    {
      name: '20231103',
      shop: 'Checkers',
      dateTime: '2023-10-01 12:00:13',
      shopperId: 2,

      products: [
        {
          name: 'pap',
          price: 7000,
          size: '5',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'tomatoes',
          price: 3200,
          size: '2',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'potatoes',
          price: 4199,
          size: '2',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'Rice',
          price: 9999,
          size: '2',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'MIlk',
          price: 2122,
          size: '1',
          sizeUnits: 'l',
          quantity: 1,
        },
      ],
    },
    {
      name: '20231101',
      shop: 'Dischem',
      dateTime: '2023-11-01 16:00:13',
      shopperId: 1,

      products: [
        {
          name: 'Tissues',
          price: 9000,
          size: '40',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'wipes',
          price: 7000,
          size: '5',
          sizeUnits: 'kg',
          quantity: 1,
        },
        {
          name: 'pampers',
          price: 7000,
          size: '5',
          sizeUnits: 'kg',
          quantity: 1,
        },
      ],
    },
  ],
};
