import { Button, Pressable, Text, View } from "react-native";

import { format, parseISO } from 'date-fns'

import { styles } from './styles'
import { Link } from "react-router-native";
import theme from "../../../../../../theme";
import useDeleteReview from "../../../../../hooks/useDeleteReview";

const ReviewItem = ({ review, userView }) => {

  const dateObject = parseISO(review.createdAt)
  const formattedDate = format(dateObject, 'dd.MM.yyyy')

  const { deleteReview }  = useDeleteReview();
  const repoID = review.id.split(".")
  repoID.shift()

  return(
    <View>
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
        {userView
          ?
          <View style={styles.container}>
            <Pressable >
              <Link to={`/${repoID.join('.')}`}> 
                <Button 
                  title="View Repository" 
                  color={theme.colors.primary} 
                />
              </Link>
            </Pressable>
            <Button 
            title={'Delete Review'} 
            color={'#ff4c4c'} 
            onPress={() => {
              deleteReview(review.id)
            }}
            />
          </View>
          : null
        }
      
    </View>
  )
};

export default ReviewItem;
