import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Hero2 from './Hero2/Hero2';
import Hero3 from './Hero3/Hero3';
import Hero4 from './Hero4/Hero4';
import Hero5 from './Hero5/Hero5';
import About from './About/About';
import NotSurvivor1 from './NotSurvivor1/NotSurvivor1';
import Options from './Options/Options';
import Options2 from './Options2/Options2';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  hero2Data,
  hero3Data,
  hero4Data,
  hero5Data,
  aboutData,
  notSurvivor1Data,
  optionsData,
  options2Data,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [hero2, setHero2] = useState({});
  const [hero3, setHero3] = useState({});
  const [hero4, setHero4] = useState({});
  const [hero5, setHero5] = useState({});
  const [about, setAbout] = useState({});
  const [notSurvivor1, setNotSurvivor1] = useState({});
  const [options, setOptions] = useState({});
  const [options2, setOptions2] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setHero2({ ...hero2Data });
    setHero3({ ...hero3Data });
    setHero4({ ...hero4Data });
    setHero5({ ...hero5Data });
    setAbout({ ...aboutData });
    setNotSurvivor1({ ...notSurvivor1Data });
    setOptions({ ...optionsData });
    setOptions2([...options2Data]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{
        hero,
        hero2,
        hero3,
        hero4,
        hero5,
        about,
        notSurvivor1,
        options,
        options2,
        projects,
        contact,
        footer,
      }}
    >
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Projects />
      <About />
      <NotSurvivor1 />
      <Options />
      <Options2 />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
