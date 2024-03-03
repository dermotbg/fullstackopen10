import { gql } from "@apollo/client";


const CORE_DETAILS = gql`
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

export const GET_REPOSITORIES = gql`
  query repositories {
    repositories{
      edges{
        node{
          ...CoreDetails
        }
      }
    }
  }${CORE_DETAILS}
`;

export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`

export const GET_REPO_BY_ID = gql`
  query repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...CoreDetails
      url
    }
}${CORE_DETAILS}
`;
  