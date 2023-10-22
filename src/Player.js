import React from 'react'
import Card from 'react-bootstrap/Card';



const Player = ({e}) => {
    return (
        <Card style={{ width: '20rem', margin: '10px' }} key={e.id}>
            <Card.Img variant="top" style={{width:"315px", height:"315px"}} src={e.imageUrl} />
            <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                    <p>Team: {e.team}</p>
                    <p>Nationality: {e.nationality}</p>
                    <p>Jersey Number: {e.jerseyNumber}</p>
                    <p>Age: {e.age}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Player