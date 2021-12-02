import Experiencias from '../components/Experiencias';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { projetos } from '../data/projetos';
import Conhecimentos from '../components/Conhecimentos';

import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Conhecimentos />
        <Projetos projetos={projetos} />
      </main>
    </HomeContainer>
  );
}
