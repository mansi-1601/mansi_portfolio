import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Mathematics quiz second position'},
  // { number: 1000, text: 'Students', },
  { text: 'Qualified district level at SpellBee competition', },
  { text: 'Constantly among the top 2 in the class', }
]; 

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)
export default Acomplishments;
