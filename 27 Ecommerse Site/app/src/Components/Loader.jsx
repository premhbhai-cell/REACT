import React from "react";

// const Loader = ({className}) => {
//   return <div className={"loader ${claaName}"}></div>;
// };
const Loader = ({ className }) => {
  return (
    <div className={className}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;