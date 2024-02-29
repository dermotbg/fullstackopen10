import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import theme from '../../theme';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.secondary,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const {data, loading, error }  = useRepositories()

  if(loading) return <ActivityIndicator size={'large'}/>
  if(error) console.log(error)

  const repositories = data.repositories

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={(repositoryNodes)}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(item) => {
          return <RepositoryItem
              keyExtractor={item => item.id}
              item={item}
          />
        }}
      />
      <View style={styles.separator} />
    </View>
  );
};

export default RepositoryList;