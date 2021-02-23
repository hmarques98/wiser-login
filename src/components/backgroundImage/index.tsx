import * as React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../global/colors';
import {Container, ImageBG} from './styles';

interface BackGroundImageProps {
  children?: React.ReactNode;
}
const BackGroundImage = (props: BackGroundImageProps) => {
  return (
    <Container>
      <View>
        <ImageBG source={require('../../assets/images/imageBG.png')} />
      </View>

      <LinearGradient
        children={props.children}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        start={{
          x: 0,
          y: 0.45,
        }}
        end={{
          x: 0,
          y: 0,
        }}
        colors={[COLORS.primaryColor, 'rgba(105, 57, 153, 0)']}
      />
    </Container>
  );
};

export default BackGroundImage;
