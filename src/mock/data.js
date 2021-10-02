import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'synthia.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'country-q.png',
    title: 'Country quiz',
    info: 'This project is based on SCSS , SASS, and REACT. It is built from scratch. It generates an API of the country names, country capitals and flags. This app allows users to guess the name of a country given a capital city or a flag.',
    info2: '',
    url: 'https://country-quiz-synthia.netlify.app/',
    repo: 'https://github.com/bakozetra/country-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'birthday-app.png',
    title: 'Birthday App',
    info: 'This project is built with CSS and vanilla javascript. It generates an API of people’s birthday dates. This app allows you to add a birthday date  and remove it from this app.',
    info2: '',
    url: 'https://synthia-birthday-app.netlify.app/',
    repo: 'https://github.com/bakozetra/birthday-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'photograph.png',
    title: 'Photograph',
    info: 'This project is built from scratch. It is built with CSS, SASS, and HTML5. It shows the responsiveness of the website.',
    info2: '',
    url: 'https://front-end-finals.netlify.app/',
    repo: 'https://github.com/bakozetra/front-end-finals', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/synthia-hanitriniaina-1ab69a1a5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bakozetra',
    },
  ],
};

// Github start/fork buttons
// export const githubButtons = {
//   isEnabled: true, // set to false to disable the GitHub stars/fork buttons
// };
