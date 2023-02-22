import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionName, SectionSubHead } from './HeroStyles';
import { Zeyada } from '@next/font/google';

const zeyada = Zeyada({
  subsets: ['latin'],
  weight: ['400'],
})

const Hero = (props) => {


    return (
    <Section row nopadding>
      <LeftSection>
        <SectionName className={zeyada.className}>
          Adham Mahmoud
        </SectionName>
        <SectionTitle main center>
          A Front End Developer and a UI/UX Designer.
        </SectionTitle>
        <SectionSubHead>
          Welcome To My Personal Portfolio
        </SectionSubHead> <br />
        <SectionText>
          I enjoy bringing ideas to life and making them a reality.
        </SectionText>
        <Button>
          <Link href="mailto:adham.elgohary.12@gmail.com" style={{color:"white"}}>
            Contact Me
          </Link>
        </Button>
      </LeftSection>
    </Section>
    )
};

export default Hero;