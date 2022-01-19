import React from "react";
import { ClipLoader } from "react-spinners";
import { LoaderType } from "../../ts/type";
const Loader = (props: LoaderType) => {
  // if (props.size === undefined) props.size = 40;

  return (
    <div className="overlay-content">
      <div className="wrapper">
        <ClipLoader
          css={props.css}
          size={props.size}
          color={props.css}
          loading={props.loading}
        />
        <span className="message">{props.message}</span>
      </div>
    </div>
  );
};

export default Loader;
