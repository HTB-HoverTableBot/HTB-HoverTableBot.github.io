/* This example requires Tailwind CSS v2.0+ */
import React from "react";


const VerticalFeatureRow = (props) => {
  return (
    <div className={props.reverse?"mt-20 flex flex-wrap items-center flex-row-reverse":"mt-20 flex flex-wrap items-center"}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-xl text-left text-gray-300 font-semibold">{props.title}</h3>
        <div className="mt-6 text-base items-left text-left pb-10 text-gray-100 leading-9">{props.description}</div>
        {props.link && (
          <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            <a className="text-white" href={props.link}>
              {props.textLink}
            </a>
          </button>
        )}
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };