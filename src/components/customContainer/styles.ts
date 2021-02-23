import styled from 'styled-components/native';
import {REGULAR_FONT, SEMI_BOLD_FONT} from '../../assets';
import COLORS from '../../global/colors';
import THEME, {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../global/theme';

export const Container = styled.View`
  background-color: ${COLORS.secondaryColor};

  height: 357px;
  width: ${WINDOW_WIDTH * 0.8}px;
  padding: ${THEME.padding * 1.4}px;
  border-radius: 8px;
  align-items: center;
  position: relative;
`;

export const Header = styled.Text`
  font-family: ${REGULAR_FONT};
  font-size: ${WINDOW_HEIGHT * 0.03}px;
  line-height: 32px;
  text-align: center;
  color: ${COLORS.accentColor};
  margin-bottom: 16px;
`;
export const Description = styled.Text`
  font-family: ${SEMI_BOLD_FONT};
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: ${COLORS.textColor};
  margin-bottom: 16px;
`;
