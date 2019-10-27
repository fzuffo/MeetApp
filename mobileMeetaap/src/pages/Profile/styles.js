import styled from 'styled-components';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 10px 20px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;

export const Separator = styled.View`
  margin: 20px 0 10px 0;
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
  background-color: #d44059;
`;
