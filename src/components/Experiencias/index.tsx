import SectionTitle from '../SectionTitle';
import ExperiênciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="25+" description="projeto feitos" />

      <section>
        <ExperiênciaItem
          year="20+"
          title="Projetos com JavaScript"
          description="Seja do Vanilla à conteúdos mais aprofundados de React, a maioria dos projeto aqui foram feitos com JS"
        />
        <ExperiênciaItem
          year="15+"
          title="Projetos feitos na Trybe"
          description="Diversos projetos com JS, React Class-Components/Function-Components, Redux e CSS Vanilla"
        />
        <ExperiênciaItem
          year="5+"
          title="Projetos feitos na RocketSeat"
          description="Alguns projetos abordando TypeScript, NextJS, Styled-Components, entre outras libs/frameworks"
        />
        <ExperiênciaItem
          year="2"
          title="Projetos Pessoais"
          description="Os maiores projetos, e os que mais mais orgulho, foram os desenvolvidos por mim e alguns amigos"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
