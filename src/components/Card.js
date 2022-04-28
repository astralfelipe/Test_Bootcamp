import React from 'react'

export default function Card(props)  {
  const { item } = props;

  return (
      <div className="resultCard">
        <figure className="image is 48x48">
            <img src="{item.id}" alt="" />
        </figure>
        <h4>{item.price}</h4>
        <h4>{item.available_quantity}</h4>       
    </div>
    
  );
}


