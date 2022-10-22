import { Card, Col } from 'react-bootstrap'

export interface Props {
  character: CharacterType
}
export interface CharacterType {
  id: number
  name: string
  location: ILocation
  image: string
}
export interface ILocation {
  name: string
  type: string
}

export const Character = ({ character }: Props) => {
  return (
    <Col xl={6}>
      <Card
        className='my-3 rounded d-flex flex-row shadow  mb-5 bg-white rounded'
        style={{ border: 'none' }}
      >
        <Card.Img className='w-25' variant='top' src={character.image} />
        <Card.Body>
          <Card.Title>
            <b> #id: </b>
            {character.id}
          </Card.Title>
          <Card.Text>
            <b> Location: </b>
            {character.location.name}
          </Card.Text>
          <Card.Text>
            <b> Name: </b>
            {character.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
