import Card from 'react-bootstrap/Card';
import './appreciation.css'

function Appreciation(props) {
    return (
      <div className='Appreciation'>
      <Card className='Cards'  style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title id='card_title'>{props.title}</Card.Title>
        <Card.Text id='card_des'>{props.subTitle}</Card.Text>
      </Card.Body>
      <Card.Img id='image'  src={props. imgSrc} />
    </Card>
      </div>

  );
}

export default Appreciation;