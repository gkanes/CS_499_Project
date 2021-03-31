import { nanoid } from 'nanoid';
// import { BiInfoCircle } from 'react-icons/bi';

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

// NOTSURVIVOR1 DATA
export const notSurvivor1Data = {
  title: 'Would you like to help someone who is a',
  name: 'sexual assault survivor',
  subtitle: 'or would you like to learn more about the post-assault process?',
  cta: 'Help a survivor',
  cta2: 'Learn more information',
};

// OPTIONS DATA
export const optionsData = {
  title: 'If the assault has happened in 72 hours',
  name: 'sexual assault survivor',
  subtitle: 'or would you like to learn more about the post-assault process?',
  cta: 'Help a survivor',
  cta2: 'Learn more information',
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
    title: 'If you would like to speak to an RSVP advocate to help you through the process',
    info: 'Please login to your MySHR portal and book an advocate appointment through ',
    info2: 'Want to speak to someone now? Call (213) 740-9355 (WELL)',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Santa Monica Rape Treatment Center',
    info: '1250 16th St, Santa Monica, CA 90404.  ',
    info2: '(424) 259-7208',
    url: 'https://www.uclahealth.org/rtc/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Long Beach Community Hospital',
    info: '2801 Atlantic Avenue Long Beach, CA 90806',
    info2: '(562) 933-2000',
    url: 'https://www.memorialcare.org/locations/long-beach-medical-center',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'San Gabriel Valley Hospital',
    info: '438 West Las Tunas Drive, San Gabriel, CA 91776',
    info2: '(626) 289-5454',
    url: 'https://www.sgvmc.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Presbyterian Community Hospital',
    info: '12401 Washington Blvd Whittier, CA 90602',
    info2: '(562)-698-0811',
    url: 'https://www.pihhealth.org/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Providence Little Company of Mary Medical Center - Torrance',
    info: '4101 Torrance Blvd, Torrance, CA 90503',
    info2: '(310) 540-7676',
    url: 'https://www.providence.org/locations/PLCM-torrance#llaid=5909',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// OPTIONS2 DATA
export const options2Data = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'RSVP Advocate',
    info:
      'An RSVP Advocate is a fully confidential individual who can walk you through your options.',
    info2: true,
    info3: 'Nothing! If you file a report and decide not to proceed later on that is fine.',

    url: true,
    repo: 'https://studenthealth.usc.edu/sexual-assault/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mental Health Resources',
    info:
      "There are a variety of mental health resources available to you at USC. Visit Engemann's website below to find them.",
    info2: true,
    info3: 'Nothing! If you file a report and decide not to proceed later on that is fine.',

    url: true,
    repo: 'https://studenthealth.usc.edu/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Filing a Report with Title IX',
    info:
      'The newly-created Office for Equity, Equal Opportunity, and Title IX (EEO-TIX) combines resources to centralize the University’s reporting, investigation, and resolution procedures.\n\n',
    info2: 'What happens when I file a report with Title IX?',
    info3: 'Nothing! If you file a report and decide not to proceed later on that is fine.',
    url: false,
    repo: 'https://eeotix.usc.edu/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Call the Police',
    info:
      'If you would like to press charges in the future, one option is to file a report with LAPD.',
    info2: 'What happens if I file a police report?',
    info3: 'Nothing! If you file a report and decide not to proceed later on that is fine.',
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
