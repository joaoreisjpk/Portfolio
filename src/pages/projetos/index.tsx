import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { projetos } from '../../data/projetos';

import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            img={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}
