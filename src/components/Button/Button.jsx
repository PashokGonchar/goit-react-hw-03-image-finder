import React from 'react';
import { ButtonDiv,MainButton } from './Button.styled';

const Button = ({ onClick, disabled }) => {
  return (
    <ButtonDiv>
      <MainButton onClick={onClick} disabled={disabled}>
        Load more
      </MainButton>
    </ButtonDiv>
  );
};

export default Button;
