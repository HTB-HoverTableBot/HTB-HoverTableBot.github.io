import React from 'react';

const Section = (props) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-4 text-center">
        {props.title && (
          <h2 className="text-4xl text-gray-100 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl text-gray-500 md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };