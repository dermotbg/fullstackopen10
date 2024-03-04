import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../../../../../../theme";

import { format, parseISO } from 'date-fns'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  flexCol: {
    display: 'flex',
    flexFlow: 'column-wrap',
    maxWidth: '85%'
  },
  rating: {
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 2, 
    borderColor: theme.colors.primary,
    borderRadius: 50/2,
    marginRight: '5%'
  },
  ratingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.primary,
    paddingTop: 9,
  },
  titleText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
  },
});


const ReviewItem = ({ review }) => {

  const dateObject = parseISO(review.createdAt)
  const formattedDate = format(dateObject, 'dd.MM.yyyy')

  return(
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingText} >{review.rating}</Text>
      </View>
      <View style={styles.flexCol} >
        <Text style={styles.titleText} >
          {review.user.username}
        </Text>
        <Text>
          {formattedDate}
        </Text>
        <Text>
          {review.text}
        </Text>
      </View>
    </View>
  )
};

export default ReviewItem;
