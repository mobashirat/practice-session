import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from 'react-bootstrap/Button';

const Mealdetails = () => {
    const { mealId } = useParams()
    const url = `https://jsonplaceholder.typicode.com/users/${mealId}`
    const history = useHistory()

    const [detail, setDetails] = useState({})

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])

    const handleDetails = () => {
        history.push('/home')

    }
    return (
        <div>
            <h4>FriendDetails;{mealId} </h4>
            <h3>{detail.name}</h3>
            <h5>{detail.phone}</h5>
            <h5>Works At:{detail.company?.name}</h5>

            <Button onClick={handleDetails} variant="warning">Warning</Button>



        </div>
    );
};

export default Mealdetails;