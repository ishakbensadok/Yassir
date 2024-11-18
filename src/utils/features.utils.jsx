import { ReactComponent as RideSvg } from '../assets/rideIcon.svg';
import { ReactComponent as EmployeesSvg } from '../assets/employeesIcon.svg';
import { ReactComponent as BudgetSvg } from '../assets/budgetIcon.svg';

export const FEATURES_ARRAY = [
  {
    id: crypto.randomUUID(),
    svg: <RideSvg />,
    title: 'Create ride programs',
    description:
      'Set a ride program for your employees and create conditions for different business needs.',
    imageDes: 'B2B-en-benefit-highlight-desktop-1.webp',
    imageMop: 'B2B-en-benefit-highlight-mobile-1.webp',
  },

  {
    id: crypto.randomUUID(),
    svg: <EmployeesSvg />,
    title: 'Sort your employees by groups',

    description:
      'Sort your employees into groups so you can assign programs more effectively.',
    imageDes: 'B2B-en-benefit-highlight-desktop-2.webp',
    imageMop: 'B2B-en-benefit-highlight-mobile-2.webp',
  },
  {
    id: crypto.randomUUID(),
    svg: <BudgetSvg />,
    title: 'Adjust your budget',
    description:
      'Optimize your resources and adjust your preferred budget based on the different plans we offer.',
    imageDes: 'B2B-en-benefit-desktop-3.webp',
    imageMop: 'B2B-en-benefit-mobile-3.webp',
  },
];
