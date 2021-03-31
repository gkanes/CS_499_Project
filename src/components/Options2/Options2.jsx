import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Card, Accordion, Button } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// import { BiInfoCircle } from 'react-icons/bi';

const Options2 = () => {
  const { options2 } = useContext(PortfolioContext);

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
    <section id="options2">
      <Container>
        <div className="options2-wrapper">
          <Title title="The Options" />
          {options2.map((option2) => {
            const { title, info, info2, info3, url } = option2;

            return (
              <Fade
                // left={isDesktop}
                center={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                  <div>
                    <p>
                      {info ||
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                    </p>
                    <p className="mb-4">
                      {url || (
                        <Accordion>
                          <Card>
                            <Card.Header>
                              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                {info2}
                              </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>{info3}</Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      )}

                      {/* <div onMouseEnter={onHover} onMouseLeave={onLeave} role="button"> */}
                      {/* {url || <BiInfoCircle />} */}
                      {/* </div> */}
                      {/* {hover
                        ? 'An RSVP Advocate is a fully confidential individual who can walk you through your options.'
                        : ''} */}
                    </p>
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

export default Options2;
