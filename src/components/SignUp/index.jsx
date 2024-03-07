import useCreateUser from "../hooks/useCreateUser";
import SignUpFormContainer from "./components/SignUpFormContainer";

const SignUp = () => {

  const { submitUser } = useCreateUser();

  const onSubmit = async (data) => {
    try {
      await submitUser(data)
    } catch (error) {
      console.log('error in SignUp Component: ' + error)
    }
  }

  return <SignUpFormContainer onSubmit={onSubmit} />
}

export default SignUp;