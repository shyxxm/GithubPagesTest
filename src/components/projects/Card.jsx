import React from 'react';

const Card = ({ title, details, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-lg hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-center  text-ternary-dark dark:text-ternary-light">{title}</h3>
        <p className="text-gray-100 mt-2 text-center  text-ternary-dark dark:text-ternary-light">{details}</p>
      </div>
    </div>
  );
};

export default Card;