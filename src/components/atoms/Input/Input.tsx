import React from 'react';

import { InputContainer, InputCustom } from './Input.styles';

export interface IInput {
  icon?: any;
}

const Input: React.FC<IInput> = ({ icon }) => {
  return (
    <InputContainer>
      <InputCustom />
      {icon && icon}
    </InputContainer>
  );
};

export default Input;
