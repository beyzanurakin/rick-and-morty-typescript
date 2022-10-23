import { Modal, Form, Button } from 'react-bootstrap'
import { useGlobalContext } from '../context/context'

const Filters = () => {
  const { showModal, setShowModal } = useGlobalContext()
  const handleClose = () => {
    setShowModal((prev) => ({
      ...prev,
      show: false,
    }))
  }

  return (
    <Modal show={showModal.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Filter</Modal.Title>
        <Button
          onClick={() =>
            setShowModal((prev) => ({
              ...prev,
              filter: '',
            }))
          }
          variant='light'
        >
          Clean Filters
        </Button>{' '}
      </Modal.Header>
      <Modal.Body>
        <Form
          onChange={(e) => {
            setShowModal((prev) => ({
              ...prev,
              filter: (e.target as HTMLInputElement).value,
            }))
            console.log(showModal.filter)
          }}
        >
          <Form.Check label='Rick' name='filter' type='radio' value='rick' />
          <Form.Check label='Morty' name='filter' type='radio' value='morty' />
        </Form>
      </Modal.Body>
    </Modal>
  )
}
export default Filters
