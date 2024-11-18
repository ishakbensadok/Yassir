import { ReactComponent as RideHailingSvg } from '../assets/rideHailingIcon.svg';
import { ReactComponent as FoodSvg } from '../assets/foodIcon.svg';
import { ReactComponent as StoresSvg } from '../assets/storesIcon.svg';
import { ReactComponent as DeliverySvg } from '../assets/deliveryIcon.svg';

export const ONE_APP_ARRAY = [
  {
    id: crypto.randomUUID(),
    tapContent: 'Yassir Ride',
    description:
      'Your ultimate solution for hassle-free ride-hailing, designed for your convenience and safety.',
    image: 'yassir-ride-en.webp',
    details: [
      {
        id: crypto.randomUUID(),
        title: 'Quick & easy',
        description:
          'One click on the app is all it takes to get a driver at your location. Anytime, anywhere.',
      },
      {
        id: crypto.randomUUID(),
        title: 'Secure',
        description:
          'Our drivers are verified and the rides are geolocalized, so you can travel with peace of mind.',
      },
      {
        id: crypto.randomUUID(),
        title: 'The right price',
        description:
          'Rates adjusted to the service you choose, displayed in advance, no hidden fees!',
      },
    ],
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: crypto.randomUUID(),
    tapContent: 'Yassir Express',
    description: 'Grab a bite!',
    image: 'yassir-express-en.webp',

    details: [
      {
        id: crypto.randomUUID(),
        title: 'Fast and easy',
        description:
          'One click is all it takes to get your favorite meals delivered quickly.',
      },
      {
        id: crypto.randomUUID(),
        title: 'A wide variety of restaurants',
        description: `At Yassir, there's something for everyone: fast food, healthy food, local and world cuisine... a wide choice of restaurants for you to enjoy!`,
      },
      {
        id: crypto.randomUUID(),
        title: `Don’t miss our deals`,
        description: 'Many promotions and good deals await you in the app.',
      },
    ],
  },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: crypto.randomUUID(),
    tapContent: 'Yassir Grocery',
    description: 'Grocery shopping from home.',
    image: 'yassir-grocery-en.webp',

    details: [
      {
        id: crypto.randomUUID(),
        title: 'Fast and easy',
        description:
          'Fill up your basket with a few clicks and we’ll get it to your door in minutes.',
      },
      {
        id: crypto.randomUUID(),
        title: 'A wide variety',
        description: `We’ve got it all: Food products, bread, cosmetics, cleaning products, etc.`,
      },
      {
        id: crypto.randomUUID(),
        title: `Don’t miss our deals`,
        description: 'Many promotions and good deals await you in the app.',
      },
    ],
  },
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: crypto.randomUUID(),
    tapContent: 'Yassir Pay',
    description: 'Payments made easy.',
    image: 'yassir-pay-en.webp',

    details: [
      {
        id: crypto.randomUUID(),
        title: 'Yassir services',
        description:
          'Use your Yassir Pay balance to pay for rides on Yassir Go and Yassir Express deliveries.',
      },
      {
        id: crypto.randomUUID(),
        title: 'Money transactions',
        description: `Send money to friends and family from your contacts or to a new phone number.`,
      },
      {
        id: crypto.randomUUID(),
        title: `Smooth & secure`,
        description:
          'Experience seamless, secure, and fast transactions with Yassir Pay.',
      },
    ],
  },
];

export const ONE_APP_TAPS_CONTENTS = ONE_APP_ARRAY.map((t) => ({
  id: t.id,
  tapContent: t.tapContent,
}));
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
export const PARTNER_UP_ARRAY = [
  {
    id: crypto.randomUUID(),
    tapContent: 'Drive with us',
    contents: [
      {
        id: crypto.randomUUID(),
        rounded: {
          svgComponent: <RideHailingSvg />,
          content: 'ride hailing',
        },
        title: 'Drive with us',
        image: 'drive.webp',
        details: [
          {
            id: crypto.randomUUID(),
            title: `Be your own boss`,
            description:
              'Work whenever you want from the comfort of your own car, with just a tap of the screen.',
          },
          {
            id: crypto.randomUUID(),
            title: `Make money`,
            description:
              'Earn comissions with each ride and increase your revenue each month.',
          },
          {
            id: crypto.randomUUID(),
            title: `Easy to use`,
            description:
              'The Yassir driver app is all you need to get ride requests in your area.',
          },
        ],
        callToActionBtn: {
          content: 'Become a driver',
          link: 'https://chauffeur.yassir.com/fr/signup',
        },
      },
    ],
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: crypto.randomUUID(),
    tapContent: 'Sell with us',

    contents: [
      {
        id: crypto.randomUUID(),
        rounded: {
          svgComponent: <FoodSvg />,
          content: 'food',
        },
        title: 'Sell your delights',
        image: 'sell-1.webp',

        details: [
          {
            id: crypto.randomUUID(),
            title: `Open your online restaurant`,
            description:
              'Add your menu and cook delicious meals. We’ll deliver your delights to people’s doors!',
          },
          {
            id: crypto.randomUUID(),
            title: `Smooth dashboard`,
            description:
              'Lead your business, manage incoming orders, and track your performance with an easy and convenient dashboard.',
          },
          {
            id: crypto.randomUUID(),
            title: `Propose promos`,
            description:
              'Discuss with our Ops team to add promos and deals specific to your restaurant!',
          },
        ],
        callToActionBtn: {
          content: 'Sell with Yassir',
          link: 'https://express.yassir.io/restaurant/registration',
        },
      },
      // ******************************************************
      // ******************************************************
      {
        id: crypto.randomUUID(),
        rounded: {
          svgComponent: <StoresSvg />,
          content: 'stores',
        },
        title: 'Set up shop!',
        image: 'sell-2.webp',

        details: [
          {
            id: crypto.randomUUID(),
            title: `Open your online store`,
            description:
              'Add your inventory and run your store online on the web or mobile app.',
          },
          {
            id: crypto.randomUUID(),
            title: `Smooth dashboard`,
            description:
              'Lead your business, manage incoming orders, and track your performance with an easy and convenient dashboard.',
          },
          {
            id: crypto.randomUUID(),
            title: `Propose promos`,
            description:
              'Discuss with our Ops team to add promos and deals specific to your restaurant!',
          },
        ],
        callToActionBtn: {
          content: 'Sell with Yassir',
          link: 'https://express.yassir.io/restaurant/registration',
        },
      },
    ],
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    id: crypto.randomUUID(),
    tapContent: 'Deliver with us',
    contents: [
      {
        id: crypto.randomUUID(),
        rounded: {
          svgComponent: <DeliverySvg />,
          content: 'delivery',
        },
        title: 'Deliver',
        image: 'deliver.webp',

        details: [
          {
            id: crypto.randomUUID(),
            title: `Freedom`,
            description:
              'Be your own boss. As a delivery driver, you create your own schedule and use your own motorcycle to earn money.',
          },
          {
            id: crypto.randomUUID(),
            title: `Make money`,
            description:
              'Earn commission on every delivery and boost your monthly income.',
          },
          {
            id: crypto.randomUUID(),
            title: `A chance to explore`,
            description:
              'Discover all the hidden nooks of your city as you make your runs.',
          },
        ],
        callToActionBtn: {
          content: 'Become a delivery man',
          link: 'https://express.yassir.io/driver',
        },
      },
    ],
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
];

export const PARTNER_UP_TAPS_CONTENTS = PARTNER_UP_ARRAY.map((t) => ({
  id: t.id,
  tapContent: t.tapContent,
}));

// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////

export const FLEET_SYSTEM_ARRAY = [
  {
    id: crypto.randomUUID(),
    tapContent: 'Manage Programs',
    imageDes: 'manage-program-en-desktop.webp',
    imageMop: 'manage-program-en-mobile.webp',
  },

  {
    id: crypto.randomUUID(),
    tapContent: 'Invite Users',
    imageDes: 'add-user-en-desktop.webp',
    imageMop: 'add-user-en-mobile.webp',
  },
  {
    id: crypto.randomUUID(),
    tapContent: 'Manage Users',
    imageDes: 'manage-users-en-desktop.webp',
    imageMop: 'manage-users-en-mobile.webp',
  },
  {
    id: crypto.randomUUID(),
    tapContent: 'Book Trip Business',
    imageDes: 'book-ride-en-desktop.webp',
    imageMop: 'book-ride-en-mobile.webp',
  },
  {
    id: crypto.randomUUID(),
    tapContent: 'Manage Payments',
    imageDes: 'manage-payments-en-desktop.webp',
    imageMop: 'manage-payments-en-mobile.webp',
  },
];
