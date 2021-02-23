import * as React from 'react';
import {View} from 'react-native';
import BackGroundImage from './components/backgroundImage';
import CustomContainer from './components/customContainer';
import CustomInput from './components/customInput';

interface HomeProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Home(props: HomeProps): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={{flex: 1}}>
      <BackGroundImage>
        <CustomContainer>
          <CustomInput
            onError={true}
            onChangeText={setEmail}
            value={email}
            label="Email"
            placeHolder="user@user.com"
          />
          <CustomInput
            onError={false}
            value={password}
            onChangeText={setPassword}
            label="Senha"
            placeHolder="*******"
            secureText
          />
        </CustomContainer>
      </BackGroundImage>
    </View>
  );
}

export default Home;
