import { ReactComponent as EmployeesSvg } from '../assets/Employees.svg';
import { ReactComponent as FlagSvg } from '../assets/flagIcon.svg';
import { ReactComponent as GlobalSvg } from '../assets/globalIcon.svg';

export const COMPANY__MEMBERS = [
  {
    id: crypto.randomUUID(),
    name: 'Noureddine Tayebi',
    position: 'Founder and CEO',
    image: 'Noureddine-Tayebi.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Ismail Chaib',
    position: 'GM @ Product & Tech Dept',
    image: 'Ismail-Chaib.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Ahmed Fathi',
    position: 'Talent Acquisition Manager',
    image: 'Ahmed-Fathi.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Wassim Youssef',
    position: 'Lead UX design',
    image: 'Wassim-Youssef.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Rabia Farouk',
    position: 'Product Manager',
    image: 'Rabia-Farouk.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Riad Krim',
    position: 'Engineering Manager',
    image: 'Riad-Krim.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Fella Lazouni',
    position: 'Software engineer',
    image: 'Fella-Lazouni.webp',
  },
  {
    id: crypto.randomUUID(),
    name: 'Zineb Mezidi',
    position: 'UX researcher',
    image: 'Zineb-Mezidi.webp',
  },
];

export const COMPANY__STATISTICS = [
  {
    id: crypto.randomUUID(),
    title: 'Employees',
    value: 4500,
    svg: <EmployeesSvg />,
  },

  {
    id: crypto.randomUUID(),
    title: 'Countries',
    value: 42,
    svg: <FlagSvg />,
  },
  {
    id: crypto.randomUUID(),
    title: 'Nationalities',
    value: 25,
    svg: <GlobalSvg />,
  },
];
