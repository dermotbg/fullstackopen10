import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import theme from '../../../../theme';
import { Link } from 'react-router-native';
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
    <View>
      <FlatList
        data={(repositoryNodes)}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(item) => {
          return (
            <Pressable>
              <Link to={`/${item.item.id}`}>
                <RepositoryItem
                    keyExtractor={item => item.id}
                    item={item}
                />
              </Link>
            </Pressable>
          )
        }}
      />
      <View style={styles.separator} />
    </View>
  );
};

export default RepositoryListContainter;