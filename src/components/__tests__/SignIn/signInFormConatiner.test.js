import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInFormContainer from '../../SignIn/components/SingInFormContainer';

describe('SignIn', () => {
  describe(
    'SignInFormContainer', () => {
      it('calls onSubmit with correct args when valid form is submitted', async () => {

        const onSubmit= jest.fn();

        render(<SignInFormContainer onSubmit={onSubmit}/>)


        const usernameInput = screen.getByPlaceholderText('Username')
        fireEvent.changeText(usernameInput, 'kalle')

        const passwordInput = screen.getByPlaceholderText('Password')
        fireEvent.changeText(passwordInput, 'password')
        
        const submit = screen.getByTestId('submitButton')
        fireEvent.press(submit);

        await waitFor(() => {

          expect(onSubmit).toHaveBeenCalledTimes(1);

          expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
          })
        })
      });
  });
});