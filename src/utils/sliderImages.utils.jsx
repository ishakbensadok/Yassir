export const IMAGES_PER_SLIDE_TYPE_DESKTOP = [
  {
    type: 'slide-down',
    images: [
      'mainHeroImages/1.webp',
      'mainHeroImages/2.webp',
      'mainHeroImages/3.webp',
    ],
  },
  {
    type: 'slide-down-fast',
    images: [
      'mainHeroImages/111.webp',
      'mainHeroImages/222.webp',
      'mainHeroImages/333.webp',
    ],
  },
  {
    type: 'slide-up',
    images: [
      'mainHeroImages/11.webp',
      'mainHeroImages/22.webp',
      'mainHeroImages/33.webp',
    ],
  },
];

export const IMAGES_SLIDE_MOBILE = IMAGES_PER_SLIDE_TYPE_DESKTOP.flatMap(
  (s) => s.images
);
