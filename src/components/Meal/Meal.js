
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Meal = (props) => {
    const { name, id, email, address } = props.meal
    const history = useHistory()
    const url = `/meal/${id}`
    const handleClick = () => {
        history.push(`/meal/${id}`)
    }
    return (
        <div>
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {address.city}
                            </Card.Text>
                            <Card.Text>{email}</Card.Text>
                            <Link to={url}>Visit me</Link>
                            <br />
                            <Button onClick={handleClick} variant="outline-primary">Click</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default Meal;