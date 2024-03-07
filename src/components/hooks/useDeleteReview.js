import { useApolloClient, useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";

const useDeleteReview = () => {

  const apolloClient = useApolloClient();

  const [ deleteReviewFunction ] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.log(error)
    },
   })

   const deleteReview = async (reviewID) => {
    try {
      await deleteReviewFunction({variables: { deleteReviewId: reviewID }})
      apolloClient.resetStore()
    }  catch (error) {
      console.log(error)
      throw new Error('An error has occurred:' + error)
    }
   }

   return { deleteReview }

};

export default useDeleteReview;