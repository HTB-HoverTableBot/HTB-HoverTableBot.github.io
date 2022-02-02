/* This example requires Tailwind CSS v2.0+ */
import React from "react";


const VerticalFeatureRow = (props) => {
  return (
    <div className={props.reverse?"mt-20 flex flex-wrap items-center flex-row-reverse":"mt-20 flex flex-wrap items-center"}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-300 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl text-gray-100 leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };