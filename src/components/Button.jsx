import React from "react";

const Button = ({ title, activeClass, callback }) => {
  return (
    <button onClick={callback} className={activeClass}>
      {title}
    </button>
  );
};

export default Button;
