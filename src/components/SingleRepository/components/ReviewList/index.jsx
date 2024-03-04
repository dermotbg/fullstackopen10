import { ActivityIndicator, View } from "react-native";
import ReviewListContainer from "./components/ReviewListContainer/index.jsx";
import useReviews from "../../../hooks/useReviews.js";
import { useParams } from "react-router-native";

const ReviewList = () => {

  const { repoId } = useParams();

  const { data, loading, error } = useReviews(repoId);

  if (loading){
    return <ActivityIndicator size={'large'}/>
  }
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  return(
    <View>
      <ReviewListContainer reviews={data}/>
    </View>
  )
}
export default ReviewList;