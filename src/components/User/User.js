import React from 'react';

const User = (props) => {
    const { strMeal, strMealThumb } = props.user
    return (
        <div>
            <h3>Name:{strMeal}</h3>
            <img src={strMealThumb} alt="" />
        </div>
    );
};

export default User;