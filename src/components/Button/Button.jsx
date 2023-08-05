import React from 'react';

const Button = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

export default Button;
