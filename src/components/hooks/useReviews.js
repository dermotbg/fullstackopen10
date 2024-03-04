import { useQuery } from '@apollo/client';

import { GET_REVIEWS_BY_ID } from '../../graphql/queries';


const useReviews = (repoID) => {
  const {data, loading, error} = useQuery(GET_REVIEWS_BY_ID, {
    variables: { repositoryId: repoID },
    fetchPolicy: 'cache-and-network'
  })
  if(error) {
    console.log(error)
    throw new Error('Error Logged to console')
  }

  return { data, loading, error }
}

export default useReviews; 