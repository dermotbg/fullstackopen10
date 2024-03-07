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
  query repositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String
    ){
    repositories(
      orderBy: $orderBy, 
      orderDirection: $orderDirection, 
      searchKeyword: $searchKeyword
      ){
      edges{
        node{
          ...CoreDetails
        }
      }
    }
  }${CORE_DETAILS}
`;

export const GET_USER = gql`
  query($includeReviews: Boolean!) {
    me {
      id
      username
      reviews @include(if: $includeReviews){
        edges {
          node {
            id
            text
            rating
            createdAt
            user{
              username
            }
          }
        }
      }
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

export const GET_REVIEWS_BY_ID = gql`
query repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
  