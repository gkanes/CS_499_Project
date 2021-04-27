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

  let hoverButton;
  if (hover) {
    hoverButton = (
      <div className="hoverExplanation">
        An RSVP Advocate is a fully confidential individual who can walk you through your options.
      </div>
    );
  } else {
    hoverButton = <div />;
  }

  return (
    <section id="options">
      <Container>
        <div className="options-wrapper">
          <Title title="Rape Kit Resources" />
          <div className="hoverExplanation">
            Getting a rape kit entails a doctor or nurse conducting a four- to six-hour examination,
            and will preserve this evidence in a sexual assault evidence collection kit, commonly
            referred to as a rape kit. If a survivor chooses to report the rape to the police, the
            evidence in the rape kit can be one a very powerful tool to bring a perpetrator to
            justice.
          </div>
          <h1 className="options-wrapper__text-title">
            <div className="iRow">
              <div onMouseEnter={onHover} onMouseLeave={onLeave} role="button">
                <BiInfoCircle />
              </div>
              {hoverButton}
            </div>
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
