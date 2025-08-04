import * as React from "react";
import { DNA } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader__container">
      <DNA
        visible={true}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper loader__spinner"
      />
    </div>
  );
};

export default Loading;
