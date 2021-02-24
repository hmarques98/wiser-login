import * as React from 'react';
import {View} from 'react-native';
import BackGroundImage from './components/backgroundImage';
import CustomContainer from './components/customContainer';
import CustomInput from './components/customInput';
import {useAppDispatch, useAppSelector} from './store/store';
import {
  selectEmail,
  changeEmail,
  selectPassword,
  changeNamePassword,
  stateHasErrorEmail,
  stateHasErrorPassword,
} from './store/features/sectionSlice';

interface HomeProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Home(props: HomeProps): JSX.Element {
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const hasErrorEmail = useAppSelector(stateHasErrorEmail);
  const hasErrorPassword = useAppSelector(stateHasErrorPassword);
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1}}>
      <BackGroundImage>
        <CustomContainer>
          <CustomInput
            onError={hasErrorEmail}
            onChangeText={(text) => dispatch(changeEmail(text))}
            value={email}
            label="Email"
            placeHolder="user@user.com"
          />
          <CustomInput
            onError={hasErrorPassword}
            value={password}
            onChangeText={(text) => dispatch(changeNamePassword(text))}
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
