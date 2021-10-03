import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';


const Meals = () => {

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div>
            <h1>I have:{meals.length}</h1>

            <Row xs={1} md={3} className="g-4">
                {
                    meals.map(meal => <Meal
                        meal={meal}
                    ></Meal>)
                }

            </Row>

        </div>
    );
};

export default Meals;