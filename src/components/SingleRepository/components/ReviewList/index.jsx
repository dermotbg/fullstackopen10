import { ActivityIndicator } from "react-native";
import ReviewListContainer from "./components/ReviewListContainer/index.jsx";
import useReviews from "../../../hooks/useReviews.js";
import { useParams } from "react-router-native";

const ReviewList = () => {

  const { repoId } = useParams();

  const { data, loading, error, fetchMore } = useReviews({ 
    repoId: repoId,
    first: 6,
  });

  if (loading){
    return <ActivityIndicator size={'large'}/>
  }
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  return <ReviewListContainer reviews={data} fetchMore={fetchMore} />
}
export default ReviewList;