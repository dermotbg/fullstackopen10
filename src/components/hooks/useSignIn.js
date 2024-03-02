import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../../graphql/mutations";

const useSignIn = () => {

 const [login, result] = useMutation(SIGN_IN, {
  onError: (error) => {
    console.log(error.graphQLErrors[0].message)
  },
 });

 const signIn = async (credentials) => {
  try {
    return await login({ variables: { username: credentials.username, password: credentials.password  } })
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred:' + error)
  }
 }

 return { signIn, result }
}

export default useSignIn;