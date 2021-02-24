import * as React from 'react';
import Footer from '../footer';
import {Container, Description, Header} from './styles';

interface CustomContainerProps {
  children: React.ReactNode;
}

const CustomContainer = (props: CustomContainerProps) => {
  return (
    <Container>
      <Header>Olá, seja {'\n'} bem-vindo!</Header>
      <Description>Para acessar a plataforma, faça seu login.</Description>
      {props.children}
      <Footer />
    </Container>
  );
};

export default CustomContainer;
