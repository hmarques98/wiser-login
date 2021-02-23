import styled from 'styled-components/native';
import {REGULAR_FONT} from '../../assets';
import COLORS from '../../global/colors';
import THEME, {WINDOW_WIDTH} from '../../global/theme';

export const ContainerInput = styled.View`
  width: ${WINDOW_WIDTH >= 400 ? 297 : 256}px;
  height: 48px;
  border: 1px solid ${COLORS.borderColor};
  position: relative;
  border-radius: 8px;
  margin: 19px 0;
`;
export const Label = styled.Text`
  position: absolute;
  top: -24px;
  padding-left: ${THEME.padding / 2}px;
  color: ${COLORS.accentColor};
  font-family: ${REGULAR_FONT};
`;

export const CustomTextInput = styled.TextInput`
  height: 100%;
  padding: 0 17px;
`;
