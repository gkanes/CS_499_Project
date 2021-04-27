/* eslint jsx-a11y/interactive-supports-focus: 0 */
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { BiInfoCircle } from 'react-icons/bi';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero2 } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero2;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [onHoverSpeaking, setOnHoverSpeaking] = useState(false);
  const [onHoverConfidential, setOnHoverConfidential] = useState(false);

  const onHoverSpeakingFunc = () => {
    setOnHoverSpeaking(true);
  };

  const onLeaveSpeakingFunc = () => {
    setOnHoverSpeaking(false);
  };

  const onHoverConfidentialFunc = () => {
    setOnHoverConfidential(true);
  };

  const onLeaveConfidentialFunc = () => {
    setOnHoverConfidential(false);
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

  let hoverButtonSpeaking;
  if (onHoverSpeaking) {
    hoverButtonSpeaking = (
      <div className="hoverExplanation">
        Who will I be speaking to? An RSVP Advocate, a fully confidential individual who can walk
        you through your options. They can help you through what happened, provide curated local
        resources, information about laws in the community and any other basic and medical concerns.
      </div>
    );
  } else {
    hoverButtonSpeaking = <div />;
  }

  let hoverButtonConfidential;
  if (onHoverConfidential) {
    hoverButtonConfidential = (
      <div className="hoverExplanation">
        Calling a hotline is confidential, meaning what you share will stay between you and the
        hotline employee.
      </div>
    );
  } else {
    hoverButtonConfidential = <div />;
  }

  return (
    <section id="hero2" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'I am your'}{' '}
            <span className="text-color-main">{name || 'online advocate'}</span>
            <br />
            {subtitle || 'hi'}
            <div className="iRow">
              <div
                onMouseEnter={onHoverSpeakingFunc}
                onMouseLeave={onLeaveSpeakingFunc}
                role="button"
              >
                <BiInfoCircle />
              </div>
              {hoverButtonSpeaking}
            </div>
            <div className="iRow">
              <div
                onMouseEnter={onHoverConfidentialFunc}
                onMouseLeave={onLeaveConfidentialFunc}
                role="button"
              >
                <BiInfoCircle />
              </div>
              {hoverButtonConfidential}
            </div>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="hero3" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
