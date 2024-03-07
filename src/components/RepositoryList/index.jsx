import { ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainter from './components/RespositoryListContainer';
import { useEffect, useState } from 'react';
import theme from '../../theme';

const RepositoryList = () => {

  const [sort, setSort] = useState('latest')
  const [sortArgs, setSortArgs] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
  
  useEffect(() => {
    switch (sort) {
      case 'latest':
        setSortArgs({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
        break;
      case 'highest':
        setSortArgs({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' })
        break;
      case 'lowest':
        setSortArgs({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' })
        break;
      default:
        setSortArgs({ orderBy: 'CREATED_AT', orderDirection: 'ASC' })
        break;
    }
  },[sort])

  const {data, loading, error }  = useRepositories(sortArgs)

  if(loading) return <ActivityIndicator size={'large'} style={{paddingTop: 10}}/>
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  return (
    <>
    <Picker
      selectedValue={sort}
      onValueChange={(value) => setSort(value)}
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <Picker.Item label="Latest repositories" value={'latest'}/> 
      <Picker.Item label="Highest rated repositories" value={'highest'}/> 
      <Picker.Item label="Lowest rated repositories" value={'lowest'}/> 
    </Picker>
      <RepositoryListContainter repositories={data.repositories} />
    </>
  )
};

export default RepositoryList;