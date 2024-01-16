import React from 'react';

const Card = (props) => {
  const dishes = props.dishes;

  return (
    <div className="card-container">
      {dishes.map(dish => (
        <div className="dishcard" key={dish.id}>
          <div className="card-background" style={{ backgroundImage: `url(${dish.bac})` }}>
            {/* Optionally, you can add some text content to verify if the container is visible */}
            <span>Background Image Container</span>
          </div>
          <h4>{dish.itemname}</h4>
          <p>{dish.description}</p>
          <p>{dish.price}</p>
          <button>Add</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
