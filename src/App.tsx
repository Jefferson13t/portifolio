import GlobalStyle from './styles/GlobalStyle';
import { Sobre } from "./Components/Main/Sobre"
import {Habilidades} from "./Components/Main/Habilidades"
import { Container } from './style';
import  {Projetos} from './Components/Main/Projetos';
import { Contatos } from './Components/Main/Contatos';



function App() {

  
  return (
    <Container>
      <Sobre />
      <Habilidades /> 
      <Projetos />
      <Contatos />
    <GlobalStyle />
      </Container>
    
  );
}

export default App;
