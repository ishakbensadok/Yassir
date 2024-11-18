export const COLLABSIBLE_FOOTER_LINKS_ARRAY = [
  {
    id: crypto.randomUUID(),
    label: 'Our services',
    subLinks: [
      { id: crypto.randomUUID(), label: 'Yassir Ride', url: 'ride-hailing' },
      { id: crypto.randomUUID(), label: 'Yassir Fode', url: 'food-delivery' },
      {
        id: crypto.randomUUID(),
        label: 'Yassir Grocery',
        url: 'grocery-delivery',
      },
      { id: crypto.randomUUID(), label: 'Yassir B2B', url: 'business' },
      {
        id: crypto.randomUUID(),
        label: 'Order For Someone Else',
        url: 'order-for-someone-else',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: 'Our partners',
    subLinks: [
      { id: crypto.randomUUID(), label: 'Drivers', url: 'drivers' },
      {
        id: crypto.randomUUID(),
        label: 'Delivery Drivers',
        url: 'delivery-men',
      },
      { id: crypto.randomUUID(), label: 'Restaurants', url: 'restaurant' },
      { id: crypto.randomUUID(), label: 'Stores', url: 'stores' },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: 'Company',

    subLinks: [
      { id: crypto.randomUUID(), label: 'About Us', url: 'about-us' },
      { id: crypto.randomUUID(), label: 'Careers', url: 'career' },
      { id: crypto.randomUUID(), label: 'News', url: 'news' },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: 'Work with us',

    subLinks: [
      {
        id: crypto.randomUUID(),
        label: 'Become a Partner',
        url: 'https://express.yassir.io/restaurant/registration',
      },
      {
        id: crypto.randomUUID(),
        label: 'Become a Delivery Driver',
        url: 'delivery-men',
      },
      { id: crypto.randomUUID(), label: 'Become a Driver', url: 'drivers' },
    ],
  },
];
