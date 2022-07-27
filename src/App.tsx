import GlobalStyle from './styles/GlobalStyle';
import { Sobre } from "./Components/Main/Sobre"
import {Habilidades} from "./Components/Main/Habilidades"
import { Container } from './style';
import  {Projetos} from './Components/Main/Projetos';
import { Contatos } from './Components/Main/Contatos';


function App() {

  window.alert("Esse site funciona melhor no computador, ainda não foi otimizado para o celular!")
  
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
