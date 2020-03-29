import React from 'react';

import logo from '../../assets/heroes.png';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="heroes"/>
        <h1>Title</h1>
      </Content>
    </Container>
  );
}
