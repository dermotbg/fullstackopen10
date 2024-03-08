import { useQuery } from '@apollo/client';

import { GET_REVIEWS_BY_ID } from '../../graphql/queries';


const useReviews = ({repoId, first}) => {
  const {data, loading, error, fetchMore} = useQuery(GET_REVIEWS_BY_ID, {
    variables: { 
      first: first,
      repositoryId: repoId
    },
    fetchPolicy: 'cache-and-network'
  })
  if(error) {
    console.log(error)
    throw new Error('Error Logged to console')
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if(!canFetchMore) return;
    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        first: first,
        repositoryId: repoId
      },
    })
  }

  return { data, loading, error, fetchMore: handleFetchMore }
}

export default useReviews; 