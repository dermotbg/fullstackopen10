import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../../graphql/mutations";
import { useNavigate } from "react-router-native";

const userCreateReview = () => {
  const navigate = useNavigate()

  const [createReview, { data }] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      console.log(error)
    },
    onCompleted: () => {
      navigate(`/${data.createReview.repositoryId}`)
    }
  });


  const submitReview = async (reviewFormData) => {
    try {
      await createReview({ variables: { review: reviewFormData } 
    })
    } catch (error) {
      console.log(error)
      throw new Error('An error has occurred:' + error)
    }
  }
  return { submitReview }

}

export default userCreateReview;