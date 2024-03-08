import { gql } from "@apollo/client";
import { CORE_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String,
    $first: Int,
    $after: String,
    ){
    repositories(
      orderBy: $orderBy, 
      orderDirection: $orderDirection, 
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after,
      ){
      edges{
        node{
          ...CoreDetails
        }
      }
      pageInfo {
        hasNextPage
        endCursor
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
query repository($repositoryId: ID!, $first: Int, $after: String) {
  repository(id: $repositoryId) {
    id
    fullName
    reviews (first: $first, after: $after){
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
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
`;
  