import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInFormContainer from './components/SingInFormContainer';

const SignIn = () => {

  const login = useSignIn()
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    try {
      await login.signIn(values)
      navigate('/');
    } catch (error) {
      console.log(error)
      throw new Error('An error has occurred' + error)
    }
  };


  return(
    <SignInFormContainer onSubmit={onSubmit}/>
  ) 
};

export default SignIn;