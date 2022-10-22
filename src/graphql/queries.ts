import { gql } from '@apollo/client'

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        next
        pages
      }
      results {
        id
        name
        image
        location {
          name
        }
      }
    }
  }
`
