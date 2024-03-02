import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/queries";

const useUser = () => {
  const { data, loading, error, } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network'
  })

  if(error) { 
    console.log(error);
    throw new Error('An error has been logged to the console' + error);
  }

  return { data, loading, error }
}

export default useUser;