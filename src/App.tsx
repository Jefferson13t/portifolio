import GlobalStyle from './styles/GlobalStyle';
import { Sobre } from "./Components/Main/Sobre"
import {Habilidades} from "./Components/Main/Habilidades"
import { Container } from './style';


function App() {
  return (
    <Container>
      <Sobre />
      <Habilidades /> 

    <GlobalStyle />
      </Container>
    
  );
}

export default App;
