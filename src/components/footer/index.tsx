import * as React from 'react';
import COLORS from '../../global/colors';
import {submitForm} from '../../store/features/sectionSlice';
import {useAppDispatch} from '../../store/store';
import {
  ContainerFooter,
  ForgotInfoContainer,
  ForgotInfoText,
  LinearGradientSignInButton,
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
  const dispatch = useAppDispatch();
  return (
    <ContainerFooter>
      <LinearGradientSignInButton
        start={startColorGradient}
        end={endColorGradient}
        colors={[COLORS.accentColor, COLORS.gradientColorRight]}>
        <SignInButton
          onPress={() => {
            dispatch(submitForm());
          }}>
          <SignInText>Entrar</SignInText>
        </SignInButton>
      </LinearGradientSignInButton>
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
