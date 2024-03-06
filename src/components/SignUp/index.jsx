import SignUpFormContainer from "./components/SignUpFormContainer";

const SignUp = () => {

  const onSubmit = (data) => {
    console.log(data)
  }

  return <SignUpFormContainer onSubmit={onSubmit} />
}

export default SignUp;