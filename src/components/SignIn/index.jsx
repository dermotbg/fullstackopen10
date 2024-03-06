import useSignIn from '../hooks/useSignIn';
import SignInFormContainer from './components/SingInFormContainer';

const SignIn = () => {

  const login = useSignIn()
  
  const onSubmit = async (values) => {
    try {
      await login.signIn(values)
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