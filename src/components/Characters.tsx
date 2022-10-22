import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroll-component'

import { GET_CHARACTERS_QUERY } from '../graphql/queries'
import { Character, CharacterType } from './Character'
import { Container, Row, Col } from 'react-bootstrap'

const Characters = () => {
  const [page, setPage] = useState<number>(1)
  const [items, setItems] = useState<CharacterType[] | []>([])
  const { data, loading } = useQuery(GET_CHARACTERS_QUERY, {
    variables: { page: page },
  })

  useEffect(() => {
    if (data && data.characters.results) {
      setItems((prevState) => [...prevState, ...data.characters.results])
    }
  }, [data])

  const hasMore = () => {
    if (data) {
      console.log(data.characters.info.pages)
    }
    return data && page < data.characters.info.pages
  }

  return (
    <Container>
      {items && items.length > 0 && (
        <InfiniteScroll
          dataLength={items.length}
          next={() => setPage(page + 1)}
          hasMore={hasMore()}
          loader={<h4>Loading...</h4>}
        >
          <Row>
            {items.map((elem: CharacterType) => (
              <Character character={elem} />
            ))}
          </Row>
        </InfiniteScroll>
      )}
      {items && items.length === 0 && !loading && (
        <span className='messageNoResults'>Ups !! Try again !!</span>
      )}
    </Container>
  )
}

export default Characters
