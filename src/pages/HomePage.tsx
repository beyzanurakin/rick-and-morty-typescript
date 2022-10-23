import React from 'react'
import Characters from '../components/Characters'
import Filters from '../components/Filters'
import { Navbar, Container, Button } from 'react-bootstrap'
import { FaFilter } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const HomePage = () => {
  const { setShowModal, showModal } = useGlobalContext()
  const handleOpen = () => {
    console.log(showModal.filter)
    setShowModal((prev) => ({ ...prev, show: true }))
  }
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
            Rick & Morty
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='my-3 py-3 d-flex align-items-center rounded'>
        <h3 style={{ display: 'inline', color: 'dark' }} className='my-2 mx-2'>
          {showModal.filter === ''
            ? 'Rick And Morty'
            : showModal.filter === 'rick'
            ? 'Rick'
            : 'Morty'}
        </h3>
        <Button
          onClick={handleOpen}
          variant='outline-light'
          className='btn-dark'
        >
          <FaFilter />
        </Button>
      </Container>
      <Filters />
      <Characters />
    </div>
  )
}

export default HomePage
