/* eslint jsx-a11y/interactive-supports-focus: 0 */
import React, { useContext, useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll';
// import Tilt from 'react-tilt';
import { Container } from 'react-bootstrap';
import { BiInfoCircle } from 'react-icons/bi';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

const Header = () => {
  const { projects } = useContext(PortfolioContext);
  // const { tistle, name, subtitle, cta, cta2 } = options;

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
    <section id="options">
      <Container>
        <div className="options-wrapper">
          <Title title="Rape Kit Resources" />
          <h1 className="options-wrapper__text-title">
            <div onMouseEnter={onHover} onMouseLeave={onLeave} role="button">
              <BiInfoCircle />
            </div>
            {hover
              ? 'An RSVP Advocate is a fully confidential individual who can walk you through your options.'
              : ''}
          </h1>
          {projects.map((project) => {
            const { title, info, info2, url } = project;

            return (
              <Fade
                // left={isDesktop}
                center={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="options-wrapper__text">
                  <h3 className="options-wrapper__text-title">{title || 'Project Title'}</h3>
                  <div>
                    <p>
                      {info ||
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                    </p>
                    <p className="mb-4">{info2 || ''}</p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href={url || '#!'}
                  >
                    Link
                  </a>
                </div>
              </Fade>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Header;
