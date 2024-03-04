import { Text, View } from "react-native";

import { format, parseISO } from 'date-fns'

import { styles } from './styles'

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
