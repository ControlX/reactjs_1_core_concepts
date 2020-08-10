/* 
Illustrative file for createElement usage
*/
import React from "react";

let ElemComp = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      { className: "ElemCompCss" },
      "This text is rendered from",
      React.createElement("b", null, " React.createElement")
    )
  );
};
export default ElemComp;
