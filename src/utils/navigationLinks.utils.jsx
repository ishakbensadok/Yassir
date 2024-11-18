import { ReactComponent as AlgeriaSvg } from '../assets/AlgeriaIcon.svg';
import { ReactComponent as MoroccoSvg } from '../assets/MoroccoIcon.svg';
import { ReactComponent as SAfricaSvg } from '../assets/SAfricaIcon.svg';
import { ReactComponent as SenegalSvg } from '../assets/SenegalIcon.svg';
import { ReactComponent as TunisiaSvg } from '../assets/TunisiaIcon.svg';

export const COLLABSIBLE_NAV_LINKS_ARRAY = [
  {
    id: crypto.randomUUID(),
    name: 'services',
    subLinks: [
      { id: crypto.randomUUID(), name: 'Yassir Ride' },
      { id: crypto.randomUUID(), name: 'Yassir Fode' },
      { id: crypto.randomUUID(), name: 'Yassir Grocery' },
      { id: crypto.randomUUID(), name: 'Order For Someone Else' },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: 'Partners',
    subLinks: [
      { id: crypto.randomUUID(), name: 'Drivers' },
      { id: crypto.randomUUID(), name: 'Delivery Drivers' },
      { id: crypto.randomUUID(), name: 'Yassir Agent' },
      { id: crypto.randomUUID(), name: 'Restaurants' },
      { id: crypto.randomUUID(), name: 'Stores' },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: 'About Us',

    subLinks: [
      { id: crypto.randomUUID(), name: 'About Us' },
      { id: crypto.randomUUID(), name: 'FQA' },
      { id: crypto.randomUUID(), name: 'News' },
    ],
  },
];

export const INLINE_LINKS_ARRAY = [
  {
    id: crypto.randomUUID(),
    name: 'Business',
  },
  {
    id: crypto.randomUUID(),
    name: 'Careers',
  },
];

export const ALL_NAV_LINKS = [
  ...COLLABSIBLE_NAV_LINKS_ARRAY.flatMap((link) => link.subLinks).map(
    (subLink) => subLink.name.replace(/\s+/g, '-')
  ),
  ...INLINE_LINKS_ARRAY.map((link) => link.name.replace(/\s+/g, '-')),
];

export const LANGUAGES_ARRAY = [
  {
    id: crypto.randomUUID(),
    name: 'English',
  },
  {
    id: crypto.randomUUID(),
    name: 'Français',
  },
  {
    id: crypto.randomUUID(),
    name: 'عربي',
  },
];

const addIcon = ({ name, svg }) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    {svg}
    <p>{name} </p>
  </div>
);

export const REGIONS_ARRAY = [
  {
    id: crypto.randomUUID(),
    name: addIcon({ name: 'Algeria', svg: <AlgeriaSvg /> }),
  },
  {
    id: crypto.randomUUID(),
    name: addIcon({ name: 'Morocco', svg: <MoroccoSvg /> }),
  },
  {
    id: crypto.randomUUID(),
    name: addIcon({ name: 'S.Africa', svg: <SAfricaSvg /> }),
  },
  {
    id: crypto.randomUUID(),
    name: addIcon({ name: 'Senegal', svg: <SenegalSvg /> }),
  },
  {
    id: crypto.randomUUID(),
    name: addIcon({ name: 'Tunisia', svg: <TunisiaSvg /> }),
  },
];
