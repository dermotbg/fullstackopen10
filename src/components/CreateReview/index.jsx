import CreateReviewContainer from "./components/CreateReviewContainer";

const CreateReview = () => {

  //usemutation call + logic etc etc 
  const onSubmit = (data) => {
    console.log(data)
  }

  return <CreateReviewContainer onSubmit={onSubmit} />
};
export default CreateReview;