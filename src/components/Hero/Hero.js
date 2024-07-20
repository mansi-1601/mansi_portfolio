import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
     <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
       <SectionText><span>HELLO THERE</span>I am Mansi Tiwari, a final year Computer Science student who enjoys interacting with computer through various languages.Proficient in C++ for Data structures and algorithms and front-end web development.</SectionText>
       <Button onClick={()=>window.location='https://google.com'}>Learn More</Button>
     </LeftSection>
  </Section>
);

export default Hero;