import React from "react";
import "./Button1.css";

const Button1 = ({ value = "Click Me" }) => {
  return <button className="button1">{value}</button>;
};

export default Button1;
