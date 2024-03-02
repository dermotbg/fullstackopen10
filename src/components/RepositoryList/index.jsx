import { ActivityIndicator } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainter from './components/RespositoryListContainer';

const RepositoryList = () => {

  const {data, loading, error }  = useRepositories()

  if(loading) return <ActivityIndicator size={'large'}/>
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  return <RepositoryListContainter repositories={data.repositories} />
};

export default RepositoryList;