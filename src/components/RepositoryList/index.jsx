import { ActivityIndicator } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainter from './components/RespositoryListContainer';
import { useEffect, useState } from 'react';
import { useDebounce } from "use-debounce";

const RepositoryList = () => {

  const [sort, setSort] = useState('latest')
  const [filter, setFilter] = useState('')
  const debouncedFilter = useDebounce(filter, 1000)
  const [sortArgs, setSortArgs] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' })
  
  useEffect(() => {
    switch (sort) {
      case 'latest':
        setSortArgs({ orderBy: 'CREATED_AT', orderDirection: 'DESC', filter: debouncedFilter[0] })
        break;
      case 'highest':
        setSortArgs({ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', filter: debouncedFilter[0] })
        break;
      case 'lowest':
        setSortArgs({ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', filter: debouncedFilter[0] })
        break;
      case 'filter':
        setSortArgs({ orderBy: 'CREATED_AT', orderDirection: 'DESC', filter: debouncedFilter[0] })
        break;
      default:
        setSortArgs({ orderBy: 'CREATED_AT', orderDirection: 'DESC', filter: debouncedFilter[0] })
        break;
    }
  },[sort, debouncedFilter[0]])

  const {data, loading, error }  = useRepositories(sortArgs)

  if(loading) return <ActivityIndicator size={'large'} style={{paddingTop: 10}}/>
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  return (
    <>
      <RepositoryListContainter 
      repositories={data.repositories} 
      sort={sort} 
      setSort={setSort} 
      filter={filter}
      setFilter={setFilter}
      />
    </>
  )
};

export default RepositoryList;