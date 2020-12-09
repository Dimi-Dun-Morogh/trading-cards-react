import React from 'react';
import './CustomButton.styles.scss';
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';

export const CustomButton = ({ text, square, style, arrow, inverted, ...otherProps }) => {
  return (
    <button
      className={`${square ? 'square' : inverted ? 'inverted' : ''} custom-button`}
      style={style}
      {...otherProps}
    >
      {' '}
      {text}
      {arrow ? (
        <span className="button-arrow">
          <ArrowRight />
        </span>
      ) : null}
    </button>
  );
};
