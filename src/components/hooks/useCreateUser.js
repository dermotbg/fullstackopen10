import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../../graphql/mutations";
import { useNavigate } from "react-router-native";
import useSignIn from "./useSignIn";

const useCreateUser = () => {
  const navigate = useNavigate();
  const { signIn } = useSignIn();

  const [ createUser ] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.log('Error on createUser mutation call', error)
    }
  });


  const submitUser = async (userData) => {
    try {
      const createdUser = await createUser({ variables: { user: { username: userData.username, password: userData.password } } })
      console.log(createdUser)
      if(createUser){
        await signIn({ username: userData.username, password: userData.password })
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      throw new Error('An error has occurred:' + error)
    }
  }
  return { submitUser }

}

export default useCreateUser;