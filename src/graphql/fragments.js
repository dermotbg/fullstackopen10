import { gql } from "@apollo/client";

export const CORE_DETAILS = gql`
  fragment CoreDetails on Repository {
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    id
  }
`
