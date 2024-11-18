import { ReactComponent as AlgeriaSvg } from '../assets/AlgeriaIcon.svg';
import { ReactComponent as MoroccoSvg } from '../assets/MoroccoIcon.svg';
import { ReactComponent as SAfricaSvg } from '../assets/SAfricaIcon.svg';
import { ReactComponent as SenegalSvg } from '../assets/SenegalIcon.svg';
import { ReactComponent as TunisiaSvg } from '../assets/TunisiaIcon.svg';

export const COLLABSIBLE_NAV_LINKS_ARRAY = [
  {
    id: crypto.randomUUID(),
    label: 'services',
    subLinks: [
      { id: crypto.randomUUID(), label: 'Yassir Ride', url: 'ride-hailing' },
      { id: crypto.randomUUID(), label: 'Yassir Fode', url: 'food-delivery' },
      {
        id: crypto.randomUUID(),
        label: 'Yassir Grocery',
        url: 'grocery-delivery',
      },
      {
        id: crypto.randomUUID(),
        label: 'Order For Someone Else',
        url: 'order-for-someone-else',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    label: 'Partners',
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
    label: 'About Us',

    subLinks: [
      { id: crypto.randomUUID(), label: 'About Us', url: 'about-us' },
      { id: crypto.randomUUID(), label: 'FQA', url: 'faq' },
      { id: crypto.randomUUID(), label: 'News', url: 'news' },
    ],
  },
];

export const INLINE_LINKS_ARRAY = [
  {
    id: crypto.randomUUID(),
    label: 'Business',
    url: 'business',
  },
  {
    id: crypto.randomUUID(),
    label: 'Careers',
    url: 'career',
  },
];

export const ALL_NAV_LINKS = [
  ...COLLABSIBLE_NAV_LINKS_ARRAY.flatMap((link) => link.subLinks).map(
    (subLink) => subLink.url
  ),
  ...INLINE_LINKS_ARRAY.map((link) => link.url),
];

export const LANGUAGES_ARRAY = [
  {
    id: crypto.randomUUID(),
    label: 'English',
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    label: 'Français',
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    label: 'عربي',
    url: '/',
  },
];

const addIcon = ({ label, svg }) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    {svg}
    <p>{label} </p>
  </div>
);

export const REGIONS_ARRAY = [
  {
    id: crypto.randomUUID(),
    label: addIcon({ label: 'Algeria', svg: <AlgeriaSvg /> }),
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    label: addIcon({ label: 'Morocco', svg: <MoroccoSvg /> }),
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    label: addIcon({ label: 'S.Africa', svg: <SAfricaSvg /> }),
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    label: addIcon({ label: 'Senegal', svg: <SenegalSvg /> }),
    url: '/',
  },
  {
    id: crypto.randomUUID(),
    label: addIcon({ label: 'Tunisia', svg: <TunisiaSvg /> }),
    url: '/',
  },
];
