import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    <section id="about">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          {/* <span className="cta-btn cta-btn--hero">  */}
          <Link to="hero" smooth duration={1000}>
            Home
          </Link>
          <Nav.Link href="/" />
          {/* </span> */}
          {/* <span className="cta-btn cta-btn--hero"> */}
          <Link to="options2" smooth duration={1000}>
            Options
          </Link>
          {/* </span> */}
        </Nav>
        <Title title="About" />
        <Row className="about-wrapper">
          {/* <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px"></Fade>
          </Col> */}
          {/* <Col md={6} sm={12}> */}
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {paragraphOne ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                {'\n\n\n'}
                {paragraphTwo ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
            </div>
          </Fade>
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
