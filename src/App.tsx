import React from 'react';
import GlobalStyle from './styles/GlobalStyle';

import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import { Container } from './style';

function App() {
  return (
    <Container>
      <Header /> <br />
      <Main /> <br />
      <Footer /> <br />

    <GlobalStyle />
      </Container>
    
  );
}

export default App;
