import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../../graphql/queries';


const useRepositories = (sortArgs) => {
  const {data, loading, error} = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: sortArgs.orderBy, orderDirection: sortArgs.orderDirection },
    fetchPolicy: 'cache-and-network'
  })
  if(error) {
    console.log(error)
    throw new Error('Error Logged to console')
  }

  return { data, loading, error }
}

export default useRepositories; 