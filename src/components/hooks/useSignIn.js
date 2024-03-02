import { useApolloClient, useMutation } from "@apollo/client";

import { SIGN_IN } from "../../graphql/mutations";

import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {

  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient();

 const [login, result] = useMutation(SIGN_IN, {
  onError: (error) => {
    console.log(error.graphQLErrors[0].message)
  },
 });

 const signIn = async (credentials) => {
  try {
    const { data } =  await login({ variables: { username: credentials.username, password: credentials.password  } })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore();
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred:' + error)
  }
 }

 return { signIn, result }
}

export default useSignIn;