import { gql } from "@apollo/client";
export { useGetRestaurantsQuery } from "../../generated/graphql";

/**
 * https://www.yelp.com/developers/graphiql?query=query%20%7B%0A%09search(location%3A%20%22Las%20Vegas%22%2C%20categories%3A%20%22restaurant%22)%20%7B%0A%20%20%20%20business%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
 *
 */
export const GET_RESTAURANTS = gql`
  query GetRestaurants(
    $location: String!
    $openNow: Boolean
    $categories: String
    $price: String
    $limit: Int
    $offset: Int
  ) {
    search(
      location: $location
      limit: $limit
      offset: $offset
      categories: $categories
      open_now: $openNow
      price: $price
    ) {
      business {
        name
        is_closed
        rating
        price
        photos
        categories {
          alias
          title
        }
      }
    }
  }
`;

//export function useGetRestaurants()