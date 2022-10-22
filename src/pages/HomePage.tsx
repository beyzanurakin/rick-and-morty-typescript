import React from 'react'
import Characters from '../components/Characters'
import { Navbar, Container } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div>
      {' '}
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='/logo192.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Rick And Morty Grapql
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Characters />
    </div>
  )
}

export default HomePage
