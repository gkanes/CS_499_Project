import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! I am your',
  name: 'online advocate.',
  subtitle: 'Are you a sexual assault survivor?',
  cta: 'Yes',
  cta2: 'No',
};

// HERO2 DATA
export const hero2Data = {
  title: 'First, would you like to call the ',
  name: '24/7 sexual assault hotline?',
  subtitle: 'Please call (213) 740-9355 (WELL) for immediate assistance.',
  cta: 'Continue',
};

// HERO3 DATA
export const hero3Data = {
  title: 'Are you looking to take immediate action',
  name: 'or',
  subtitle: 'would you like to learn more about your options?',
  cta: 'Immediate Action',
  cta2: 'Options',
};

// HERO4 DATA
export const hero4Data = {
  title: 'Has the assault happened in the past',
  name: '72 hours?',
  subtitle: 'would you like to learn more about your options?',
  cta: 'Yes',
  cta2: 'No',
};

// HERO5 DATA
export const hero5Data = {
  title: 'Would you like to get a rape kit done?',
  name: '72 hours?',
  subtitle: 'would you like to learn more about your options?',
  cta: 'Yes',
  cta2: 'No',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'We are here to help. Whether you are a recent survivor, a friend of a survivor, or a survivor looking for extra guidance, we hope we can provide you with resources to assist you along the way.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Santa Monica Rape Treatment Center',
    info:
      'Free sensitive medical treatment, preventive health care and counseling available 24/7.  ',
    info2:
      'A sexual assault survivor has the option of a Sexual Assault Forensic Exam (SAFE) (commonly referred to as “rape exam”) without filing a police report. UCPD will provide free and confidential transportation to the RTC.',
    url: 'https://www.uclahealth.org/rtc/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
