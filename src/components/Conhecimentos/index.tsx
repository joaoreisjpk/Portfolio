import {
  SiStyledcomponents,
  SiRedux,
  SiNextdotjs,
  SiTypescript
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoSass } from 'react-icons/io5';

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="SASS" icon={<IoLogoSass />} />
        <ConhecimentoItem title="Styled-Comp." icon={<SiStyledcomponents />} />
        <ConhecimentoItem title="TypeScript" icon={<SiTypescript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Redux" icon={<SiRedux />} />
        <ConhecimentoItem title="NextJS" icon={<SiNextdotjs />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
