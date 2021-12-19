import RecipesApp from '../images/RecipesApp.png';
import ChoqueFlix from '../images/ChoqueFlix.png';
import TrybeLibre from '../images/TrybeLibre.png';
import otimizacao from '../images/otimizacao.png';
import trivia from '../images/trivia.png';
import refatoracao from '../images/refatoracao.png';
import TrybeWarts from '../images/TrybeWarts.png';
import TripAdvisor from '../images/TripAdvisor.png';

export const projetos = [
  {
    slug: 'recipes-app',
    thumbnail: RecipesApp,
    title: 'RecipesApp',
    type: 'website',
    description:
      'Projeto realizado para finalizar o módulo de Front-End da Trybe.',
    link: 'https://github.com/joaoreisjpk/RecipesAPP--React'
  },
  {
    slug: 'trybe-libre',
    thumbnail: TrybeLibre,
    title: 'TrybeLibre',
    type: 'website',
    description:
      'Projeto realizado para consolidar nossos conhecimentos em React pela Trybe, usando class-components',
    link: 'https://trybe-libre.vercel.app/'
  },
  {
    slug: 'choqueflix',
    thumbnail: ChoqueFlix,
    title: 'Choqueflix',
    type: 'website',
    description:
      'Site que fiz com 3 amigos para consolidar nossos conhecimentos no módulo de fundamentos da Trybe. Esse projeto foi 100% desenvolvido por nós e também foi ganhador do premio de melhor projeto da turma.',
    link: 'https://choqueflix.vercel.app/'
  },
  {
    slug: 'trivia',
    thumbnail: trivia,
    title: 'Trivia',
    type: 'website',
    description:
      'Projeto realizado para consolidar nossos conhecimentos em Redux pela Trybe. Esse projeto foi desenvolvido em grupo, com a ajuda de 3 colegas.',
    link: 'https://trivia-trybe.vercel.app/'
  },
  {
    slug: 'trip-advisor',
    thumbnail: TripAdvisor,
    title: 'Refatorando JS-TS',
    type: 'website',
    description:
      'Nesse site, desenvolvi minhas habilidades de estilização usando a lib ChrakraUI',
    link: 'https://chrakra-ui-project.vercel.app/'
  },
  {
    slug: 'otimizacao',
    thumbnail: otimizacao,
    title: 'Otimização App',
    type: 'website',
    description:
      'Nesse projeto, aprendi com a RocketSeat, a utilizadade dos hooks useMemo e useCallback, e também da função Memo',
    link: 'https://otimizacao.vercel.app/'
  },
  {
    slug: 'refatorando',
    thumbnail: refatoracao,
    title: 'Refatorando JS-TS',
    type: 'website',
    description:
      'Com esse projeto, botei em prática o que aprendi sobre TypeScript, transformando um app inteiramente em JS para TS',
    link: 'https://refatorando-js-ts.vercel.app/'
  },
  {
    slug: 'trybe-warts',
    thumbnail: TrybeWarts,
    title: 'Trybe-Warts',
    type: 'website',
    description:
      'Nesse projeto aprofundei meus conhecimentos em JavaScript na Trybe, aprendendo a utilizar os forms e a lib de CSS, SemanticUI',
    link: 'https://trybewarts.vercel.app/'
  }
];
