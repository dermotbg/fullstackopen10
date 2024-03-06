import { useParams } from "react-router-native";
import RepositoryItem from "../RepositoryList/components/RepositoryItem";
import useRepository from "../hooks/useRepository";
import { ActivityIndicator, View } from "react-native";
import RepositoryLink from "./components/RepositoryLink";
import { styles } from "../SignIn/styles";
import ReviewList from "./components/ReviewList";

const SingleRepository = () => {

  const { repoId } = useParams();

  const {data, loading, error }  = useRepository(repoId)

  if(loading) return <ActivityIndicator size={'large'}/>
  if(!data && !data.repository) return <ActivityIndicator size={'large'}/>
  if(error) {
    console.log(error)
    throw new Error('An error has occurred' + error)
  }

  const formedData = {
      item: {
        ...data.repository
      }
  }

  return(
    <View style={styles.container}>
      <RepositoryItem item={formedData}></RepositoryItem>
      <RepositoryLink url={data.repository.url} />
      <ReviewList />
    </View>
  )
}

export default SingleRepository;