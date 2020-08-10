/* 
Author: Abhishek Verma
Email: abhishek_verma@epam.com

Integrating different types of components
*/
import React from "react";
import "./styles.css";
import ElemComp from "./ElemComp";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";
import PureComp from "./PureComp";

export default function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <h2 className="HeadTwo">Session 1: Home task of Abhishek Verma</h2>
      <br />
      <div>
        {/* Component : React.createElement */}
        <ElemComp />
        {/* Component : Functional Component */}
        <FuncComp />
        {/* Component : Class Component */}
        <ClassComp />
        {/* Component : Pure Component */}
        <PureComp />
      </div>
    </div>
  );
}
