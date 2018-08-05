const rawRankDate = [
  {
    name: 'basics',
    rank: 'front-end noob',
    intro: 'Welcome to aboard. Your mission is: Collect the resources and learn the skills to upgrade the ship. Good luck, captain!',
    img: 'img-ship-noob',
  },
  {
    name: 'css',
    rank: 'front-end beginner',
    intro: 'Congradulations! You become the “Front-end Beginnner”. Keep searching the resources to upgrade to the next level.',
    img: 'img-ship-beginner',
  },
  {
    name: 'javascript',
    rank: 'front-end developer',
    intro: 'You’re doing well! Now you’re a “Front-end Developer”. It’s close to complete the upgrading program. Next level: Front-end Master.',
    img: 'img-ship-developer',
  },
  {
    name: 'managers',
    rank: 'front-end master',
    intro: 'Excellent! You’re a “Front-end Master” now. But a new galary was just detected by the system. Captain, make your choice.',
    img: 'img-ship-master',
  },
];

export const skillData = [
  {
    name: 'basics',
    subcate: [
      {
        name: 'basic html',
        icon: 'zoom_out_map',
        recommend: ['Learn HTML', 'Basics of CSS', 'Basics of JavaScript'],
        optional: [],
      },
      {
        name: 'basic tool',
        icon: 'build',
        recommend: ['Git - Version Control', 'Basic Terminal Usage', 'Text Editor', 'A Heart of Reserching'],
        optional: [],
      },
    ],
  },
  {
    name: 'css',
    subcate: [
      {
        name: 'css framework',
        icon: 'flip_to_front',
        recommend: ['Bootstrap'],
        optional: ['UIKit', 'Foundation', 'Semantic UI'],
      },
      {
        name: 'css preprocessors',
        icon: 'view_quilt',
        recommend: ['SASS', 'Post CSS'],
        optional: ['Less', 'stylus'],
      },
      {
        name: 'css architechtrue',
        icon: 'developer_board',
        recommend: ['OOCSS'],
        optional: ['SMACSS', 'BEM'],
      },
      {
        name: 'css skills',
        icon: 'devices',
        recommend: ['Responsive', 'Flexbox'],
        optional: [],
      },
      {
        name: 'css mastery',
        icon: 'widgets',
        recommend: [],
        optional: ['Grid Layout', 'animation', 'Transform 2D, 3D'],
      },
    ],
  },
  {
    name: 'javascript',
    subcate: [
      {
        name: 'basic dom',
        icon: 'hdr_strong',
        recommend: [],
        optional: ['jQuery'],
      },
      {
        name: 'web drawing',
        icon: 'gradient',
        recommend: [],
        optional: ['SVG', 'Canvas', 'D3.js'],
      },
      {
        name: 'javascript skills',
        icon: 'format_quote',
        recommend: ['ES6'],
        optional: [],
      },
      {
        name: 'javascript framework',
        icon: 'developer_mode',
        recommend: ['Vus.js', 'React.js', 'Angular'],
        optional: [],
      },
      {
        name: 'javascript preprocessors',
        icon: 'nfc',
        recommend: [],
        optional: ['TypeScript', 'Babel', 'CoffeeScript'],
      },
    ],
  },
  {
    name: 'managers',
    subcate: [
      {
        name: 'package managers',
        icon: 'device_hub',
        recommend: ['YARN', 'NPM'],
        optional: ['Bower'],
      },
      {
        name: 'task runners',
        icon: 'import_contacts',
        recommend: ['npm scripts', 'gulp'],
        optional: ['grunt'],
      },
      {
        name: 'build tools',
        icon: 'folder',
        recommend: ['Webpack'],
        optional: ['Parcel'],
      },
    ],
  },
];

// category complete skills by subcate
export const subcates = [];
skillData.forEach(cate =>
  cate.subcate.forEach(subcate =>
    subcates.push(subcate)
  )
);

// rank data with level point
export const rankDate = () => rawRankDate.map(({ name, ...others }) => {
  let point = 0;
  skillData
    .filter(cate => cate.name === name)[0].subcate
    .forEach((subcate) => {
      point = subcate.recommend.length + point;
    });
  return {
    name,
    ...others,
    point,
  };
});
