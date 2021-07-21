import React from 'react';
import './button.scss';

const Button: React.FC<{ title: string }> = ({ title }) => {
  return (
    <button type='button' className='expose-button'>
      {title}
    </button>
  );
};

export default Button;
