import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import theme from '../../../../theme';
const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.secondary,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainter = ({ repositories }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View >
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

export default RepositoryListContainter;