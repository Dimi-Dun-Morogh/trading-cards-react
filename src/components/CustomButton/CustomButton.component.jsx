import React from 'react';
import './CustomButton.styles.scss';

export const CustomButton = ({ text, square, style, inverted, ...otherProps }) => {
  return (
    <button
      className={`${square ? 'square' : inverted ? 'inverted' : ''} custom-button`}
      style={style}
      {...otherProps}
    >
      {' '}
      {text}
    </button>
  );
};
