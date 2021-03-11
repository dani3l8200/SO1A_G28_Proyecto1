import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Graph.css';

export default function Body(){
  
    return (
       <div className = 'col-12 col-xl-12 row' style={{ width: '80rem' , height: '40rem' }} >
        <Card.Body className = 'col-8 col-xl-8' style={{ height: '32rem' }} >
            <Card.Title>ACA IRIA LA GRAFICA</Card.Title>

            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        <Card.Body className = 'col-xl-2'  style={{ height: '32rem' }}>
            <Card.Title>ACA LA GRAFICA DE LA RAM</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>

        


      </div>
    )
}