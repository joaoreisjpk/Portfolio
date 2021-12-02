import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import LoadingScreen from '../../../components/LoadingScreen';

import { ProjetoContainer } from '../../../styles/ProjetosStyles';
import { projetos } from '../../../data/projetos';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projetos.map(({ slug }) => ({
    params: {
      slug
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const response = projetos.find(projeto => projeto.slug === slug);

  const projeto = {
    slug: response.slug,
    title: response.title,
    type: response.type,
    description: response.description,
    link: response.link,
    thumbnail: response.thumbnail
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
