/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import perfil from '../../images/perfil.png';

function HomeHero() {
  return (
    <Container>
      <img src={perfil} alt="perfil" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo João Pedro,</h2>
          <h2>desenvolvedor Front-End</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">João Pedro Reis de Mello</span>
            </div>
            <div>
              Idade: <span className="blue">24 anos</span>
            </div>
            <div>
              Formação: <span className="blue">Trybe/RocketSeat</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="comment">// Como entrar em contato:</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Email: <span className="blue">joaoreisjpk@gmail.com</span>
            </div>
            <div>
              Cel: <span className="blue">(21) 99945-5384</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
