import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../../graphql/queries';


const useRepositories = () => {
  const {data, loading, error} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })
  if(error) {
    console.log(error)
    throw new Error('Error Logged to console')
  }

  return { data, loading, error }
}

export default useRepositories; 