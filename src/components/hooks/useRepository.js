import { useQuery } from '@apollo/client';

import { GET_REPO_BY_ID } from '../../graphql/queries';


const useRepository = (repoID) => {
  const {data, loading, error} = useQuery(GET_REPO_BY_ID, {
    variables: { repositoryId: repoID },
    fetchPolicy: 'cache-and-network'
  })
  if(error) {
    console.log(error)
    throw new Error('Error Logged to console')
  }

  return { data, loading, error }
}

export default useRepository; 