import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:"20;" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
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
          <SocialIcons href="https://github.com/Adham-elgohary">
            <AiFillGithub size="3.5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/adhamelgohary12301/">
            <AiFillLinkedin size="3.5rem" />
          </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
