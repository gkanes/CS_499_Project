/* eslint react/no-unescaped-entities: 0 */
import React, { useContext, useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { BiInfoCircle } from 'react-icons/bi';
import PortfolioContext from '../../context/context';

// function handleClick(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
//   alert("More info");
// }

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, cta2 } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [onHoverDef, setOnHoverDef] = useState(false);

  const onHoverDefFunc = () => {
    setOnHoverDef(true);
  };

  const onLeaveDefFunc = () => {
    setOnHoverDef(false);
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
  if (onHoverDef) {
    hoverButton = (
      <div className="hoverExplanation">
        <p>This includes sexual assault, nonconsensual touching, stalking, etc.</p>
      </div>
    );
  } else {
    hoverButton = <div />;
  }

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            {/* <span className="cta-btn cta-btn--hero">  */}
            <Link to="about" smooth duration={1000}>
              About
            </Link>
            <Nav.Link href="/" />
            {/* </span> */}
            {/* <span className="cta-btn cta-btn--hero"> */}
            <Link to="options2" smooth duration={1000}>
              Options
            </Link>
            {/* </span> */}
          </Nav>
          <h1 className="hero-title">
            {title || 'I am your'}{' '}
            <span className="text-color-main">{name || 'online advocate'}</span>
            <br />
            {subtitle || 'hi'}
            <div className="iRow">
              <div
                onMouseEnter={onHoverDefFunc}
                onMouseLeave={onLeaveDefFunc}
                role="button"
                tabIndex={0}
              >
                <BiInfoCircle />
              </div>

              {hoverButton}
            </div>
            <p>
              NOTE: This site is completely anonymous. We don't use cookies or store any of your
              information.
            </p>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="hero2" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="notSurvivor1" smooth duration={1000}>
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
