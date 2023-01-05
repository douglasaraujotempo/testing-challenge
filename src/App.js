import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Container } from './components/MainComponents';
import Routes from './Routes';

export default function App() {

  return (
    <BrowserRouter>
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}