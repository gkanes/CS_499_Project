/* eslint jsx-a11y/interactive-supports-focus: 0 */
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { BiInfoCircle } from 'react-icons/bi';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero5 } = useContext(PortfolioContext);
  const { title, cta, cta2 } = hero5;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero5" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">{title || 'I am your'} </h1>
          <div onMouseEnter={onHover} onMouseLeave={onLeave} role="button">
            <BiInfoCircle />
          </div>
          {hover
            ? 'Getting a rape kit entails a doctor or nurse conducting a four- to six-hour examination, and will preserve this evidence in a sexual assault evidence collection kit, commonly referred to as a rape kit. If a survivor chooses to report the rape to the police, the evidence in the rape kit can be one a very powerful tool to bring a perpetrator to justice.'
            : ''}
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="projects" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="options2" smooth duration={1000}>
                {cta2 || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
