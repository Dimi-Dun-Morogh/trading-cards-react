import React from 'react';
import './Input.styles.scss';

export const Input = ({ success, error, children, ...otherProps }) => {
  return (
    <>
      <div className="input-wrap">
        <input
          type="text"
          {...otherProps}
          className={`${success ? 'success' : ''} ${error.length ? 'error' : ''}`}
        />
        <span className={`${error.length ? '' : 'hide'} error-x`}>&#10006;</span>
      </div>
      {error.map((item, index) => (
        <span className="input-error" key={index.toString()}>
          {item.error}
        </span>
      ))}
    </>
  );
};
