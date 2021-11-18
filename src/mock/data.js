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
    info: 'This React application randomizes two types of questions - questions about the name of a given country or capital city and questions about their national flag.',
    info2:
      'When the user answer is incorrect, the next button will lead to the result score page which enables the user to try again. But when it is true, the next button will generate a new random question from the API.',
    url: 'https://country-quiz-synthia.netlify.app/',
    repo: 'https://github.com/bakozetra/country-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'birthday-app.png',
    title: 'Birthday App',
    info: 'In this project, I worked with HTML, CSS and JavaScript to create a birthday app. The main purpose of this project was to implement CRUD operations.',
    info2: 'You can sort people according to the most recent birthdays and filter them by name.',
    url: 'https://synthia-birthday-app.netlify.app/',
    repo: 'https://github.com/bakozetra/birthday-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'photograph.png',
    title: 'Photograph',
    info: 'This landing page was our final project in the front-end course. It was built with HTML, CSS, SASS and some vanilla JavaScript for scrolling images. In this project, I did the best I could to make the HTML accessible, well structured and valid. In terms of styling, I followed a Figma design and made it responsive',
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
