/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';

function HomeHero() {
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/GBDev13/youtube-meuprimeiroportfolio/main/src/assets/pessoa.webp"
        alt="perfil"
      />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo João Pedro</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">João Pedro,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Reis de Mello</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">João Pedro,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Reis de Mello</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
