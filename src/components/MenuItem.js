import React from 'react';

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      {/* Image Container */}
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Details Container */}
      <div className="details">
        <h1>{name}</h1>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItem;

