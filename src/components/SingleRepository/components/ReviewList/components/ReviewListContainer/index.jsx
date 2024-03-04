import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import theme from "../../../../../../theme";
import ReviewItem from "../ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.secondary,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const ReviewListContainer = ({ reviews }) => {

  const reviewNode = reviews
    ? reviews.repository.reviews.edges.map(e => e.node)
    : []

  return (
    <View>
      <FlatList
        data={reviewNode}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(item) =>{
          return (
            <ReviewItem
              keyExtractor={item => item.id}
              review={item.item}
            />
          )
        }}
      />
      <ItemSeparator/>
    </View>
  )
}
export default ReviewListContainer;