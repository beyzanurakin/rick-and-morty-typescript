import React, { useState, useEffect } from 'react'
import { useQuery, NetworkStatus } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroll-component'

import { GET_CHARACTERS_QUERY } from '../graphql/queries'
import { Character, CharacterType } from './Character'
import { Container, Row } from 'react-bootstrap'
import { useGlobalContext } from '../context/context'

const Characters = () => {
  const { showModal } = useGlobalContext()
  const [page, setPage] = useState<number>(1)
  const { data, loading, error, fetchMore } = useQuery(GET_CHARACTERS_QUERY, {
    variables: { page: page, name: showModal.filter },
  })

  const hasMore = () => {
    fetchMore({
      variables: {
        page: data.characters.info.next,
      },
      updateQuery: (prevPage, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevPage
        }
        return {
          characters: {
            __typename: 'Characters',
            info: {
              __typename: 'Info',
              ...prevPage.characters.info,
              ...fetchMoreResult.characters.info,
            },
            results: [
              ...prevPage.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        }
      },
    })
  }

  if (loading) return <h1>loading</h1>
  if (error) return <h1>error</h1>
  return (
    <Container>
      <InfiniteScroll
        dataLength={data.characters.results.length}
        next={hasMore}
        hasMore={page < data.characters.info.pages}
        loader={<h4>Loading...</h4>}
      >
        <Row>
          {data.characters.results.map((elem: CharacterType) => (
            <Character character={elem} />
          ))}
        </Row>
      </InfiniteScroll>

      {data.characters.results &&
        data.characters.results.length === 0 &&
        !loading && (
          <span className='messageNoResults'>Ups !! Try again !!</span>
        )}
    </Container>
  )
}

export default Characters
