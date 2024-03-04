import { View, Text } from 'react-native';

const RepositoryItemStats = ({ styles, item, numberCompactor }) => {

  return (
    <View style={[styles.listItem.row, styles.listItem.stats, styles.evenPadding]}>
      <View style={styles.listItem.column}>
        <Text style={[styles.titleText, styles.centerText]} >{numberCompactor(item.stargazersCount)}</Text>
        <Text style={styles.descriptionText}  >Stars</Text>
      </View>
      <View style={styles.listItem.column}>
        <Text style={[styles.titleText, styles.centerText]} >{numberCompactor(item.forksCount)}</Text>
        <Text style={styles.descriptionText} >Forks</Text>
      </View>
      <View style={styles.listItem.column}>
        <Text style={[styles.titleText, styles.centerText]} >{numberCompactor(item.reviewCount)}</Text>
        <Text style={styles.descriptionText} >Reviews</Text>
      </View>
      <View style={styles.listItem.column}>
        <Text style={[styles.titleText, styles.centerText]} >{numberCompactor(item.ratingAverage)}</Text>
        <Text style={styles.descriptionText} >Rating </Text>
      </View>
    </View>
  )
};

export default RepositoryItemStats;