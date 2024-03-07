import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import theme from '../../../../theme';
import { Link } from 'react-router-native';
import RepositoryQueryContainer from '../RepositoryQueryContainer';
import React from 'react';
const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.secondary,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

// const RepositoryListContainter = ({ repositories, sort, setSort, filter, setFilter }) => {
class RepositoryListContainter extends React.Component {
  renderHeader = () => {
    const props = this.props;
    return(
      <RepositoryQueryContainer 
            sort={props.sort} 
            setSort={props.setSort} 
            filter={props.filter}
            setFilter={props.setFilter}
          />
    );
  };
  repositoryNodes = () => {
    const props = this.props;
    const repositoryNodes = props.repositories
      ? props.repositories.edges.map(edge => edge.node)
      : [];
    return repositoryNodes
  }
  render() {
    return (
      <View>
        <FlatList
          data={(this.repositoryNodes())}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={this.renderHeader()}
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
  }
}

export default RepositoryListContainter;