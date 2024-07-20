import Link from 'next/link';  //links different pages ,sections
import React from 'react';
import { AiFillBook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';  //icons from the react icon package

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles'; //style components

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:'flex',alignItems:"center",color:'white',marginBottom:'20'}}></a>
         <DiCssdeck size="3rem"></DiCssdeck><Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
           <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
           <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
           <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mansi-1601">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mansi-tiwari-166005238">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://leetcode.com/u/mansitiwari745/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
