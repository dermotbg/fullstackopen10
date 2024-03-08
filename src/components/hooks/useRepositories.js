import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../../graphql/queries';


const useRepositories = ({ sortArgs, first, after }) => {
  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { 
      first: first,
      after: after,
      orderBy: sortArgs.orderBy, 
      orderDirection: sortArgs.orderDirection, 
      searchKeyword: sortArgs.filter
    },
    fetchPolicy: 'cache-and-network',
  })
  
  if(error) {
    console.log(error)
    throw new Error('Error Logged to console')
  }
  
  
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if(!canFetchMore) return;
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy: sortArgs.orderBy, 
        orderDirection: sortArgs.orderDirection, 
        searchKeyword: sortArgs.filter
      },
    })
  }
  
  return { data, loading, error, fetchMore: handleFetchMore }
}

export default useRepositories; 