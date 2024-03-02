import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: Constants.expoConfig.extra.apolloUri,
});

const createApolloClient = (authstorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authstorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (error) {
      console.log(error)
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient
