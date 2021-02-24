import * as React from 'react';
import {ContainerInput, CustomTextInput, Label} from './styles';

interface CustomInputProps {
  label: string;
  placeHolder?: string;
  secureText?: boolean;
  value: string;
  onChangeText?: (value: string) => void;
  onError: boolean;
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <ContainerInput onError={props.onError}>
      <Label>{props.label}</Label>
      <CustomTextInput
        onError={props.onError}
        autoCapitalize={'none'}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeHolder}
        secureTextEntry={props.secureText ?? false}
      />
    </ContainerInput>
  );
};

export default CustomInput;
