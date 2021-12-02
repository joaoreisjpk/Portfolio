import SectionTitle from '../SectionTitle';
import ExperiênciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="#05 anos" description="de experiência" />

      <section>
        <ExperiênciaItem
          year="2021"
          title="Dev-FrontEnd"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tempora!"
        />
        <ExperiênciaItem
          year="2021"
          title="Dev-FrontEnd"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tempora!"
        />
        <ExperiênciaItem
          year="2021"
          title="Dev-FrontEnd"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tempora!"
        />
        <ExperiênciaItem
          year="2021"
          title="Dev-FrontEnd"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, tempora!"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
