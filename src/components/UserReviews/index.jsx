import { ActivityIndicator } from "react-native";
import ReviewListContainer from "../SingleRepository/components/ReviewList/components/ReviewListContainer";
import useUser from "../hooks/useUser";

const UserReviews = () => {

  const { data, loading, error } = useUser(true);

  if (loading){
    return <ActivityIndicator size={'large'}/>
  }
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  const formedData = {
    repository: {
      ...data.me
    }
  }

  return <ReviewListContainer reviews={formedData} userView={true} />

};

export default UserReviews;