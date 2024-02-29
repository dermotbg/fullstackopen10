import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    // uri: 'http://192.168.1.100:4000/graphql',
    uri: 'http://10.0.2.2:4000/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient