/* 
Illustrative file for pure component
*/
import React from "react";

class PureComp extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="PureCompCss">
          This text is rendered from <b>Pure Component</b>
        </p>
      </div>
    );
  }
}

export default PureComp;
