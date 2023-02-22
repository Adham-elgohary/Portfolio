import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import Button from '../../styles/GlobalComponents/Button';


const Footer = () => {
  return (
    <FooterWrapper id="footer">
        <Button>
          <Link href="mailto:adham.elgohary.12@gmail.com" style={{color:"white"}}>
            Contact Me
          </Link>
        </Button>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Adham-elgohary">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/adhamelgohary12301/">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
