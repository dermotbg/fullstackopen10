import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!){
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview (review: $review){
      user {
        username
      }
      repository {
        id
      }
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
`