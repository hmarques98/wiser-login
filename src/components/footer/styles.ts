import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {REGULAR_FONT, SEMI_BOLD_FONT} from '../../assets';
import COLORS from '../../global/colors';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../global/theme';

export const ContainerFooter = styled.View`
  /* bottom: -23px; */
  justify-content: center;
  align-items: center;
  margin-top: 8%;
`;

export const SignInButton = styled(LinearGradient)`
  height: 48px;
  width: ${WINDOW_WIDTH * 0.4}px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const SignInText = styled.Text`
  font-family: ${SEMI_BOLD_FONT};
  font-size: ${WINDOW_WIDTH * 0.055}px;

  color: ${COLORS.white};
`;

export const ForgotInfoContainer = styled.View`
  margin-top: 24px;
`;
export const ForgotInfoText = styled.Text`
  font-family: ${REGULAR_FONT};
  font-size: ${WINDOW_HEIGHT * 0.02}px;
  text-align: center;
  color: ${COLORS.white};
`;

export const ViewBorderTextClick = styled.TouchableOpacity`
  border-bottom-width: 0.5px;
  border-bottom-color: white;
  margin-top: -3px;
`;
