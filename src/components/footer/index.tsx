import * as React from 'react';
import COLORS from '../../global/colors';
import {
  ContainerFooter,
  ForgotInfoContainer,
  ForgotInfoText,
  SignInButton,
  SignInText,
  ViewBorderTextClick,
} from './styles';

interface FooterProps {}

type IPositionColorGradient = {
  x: number;
  y: number;
};

const startColorGradient: IPositionColorGradient = {
  x: 1,
  y: 0,
};
const endColorGradient: IPositionColorGradient = {
  x: 0,
  y: 1,
};
const Footer = () => {
  return (
    <ContainerFooter>
      <SignInButton
        start={startColorGradient}
        end={endColorGradient}
        colors={[COLORS.accentColor, COLORS.gradientColorRight]}>
        <SignInText>Entrar</SignInText>
      </SignInButton>
      <ForgotInfoContainer>
        <ForgotInfoText>
          Esqueceu login ou senha? {'\n'} Clique{' '}
          <ViewBorderTextClick>
            <ForgotInfoText>aqui.</ForgotInfoText>
          </ViewBorderTextClick>
        </ForgotInfoText>
      </ForgotInfoContainer>
    </ContainerFooter>
  );
};

export default Footer;
