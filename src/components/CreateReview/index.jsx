import userCreateReview from "../hooks/useCreateReview";
import CreateReviewContainer from "./components/CreateReviewContainer";

const CreateReview = () => {

  const { submitReview } = userCreateReview()

  const onSubmit = (data) => {
    submitReview({
      ...data,
      rating: Number(data.rating)
  })
  }

  return <CreateReviewContainer onSubmit={onSubmit} />
};
export default CreateReview;