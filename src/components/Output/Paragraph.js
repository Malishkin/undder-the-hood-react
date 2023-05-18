import React from "react";
const Paragraph = (props) => {
  console.log("Paragraph Component is running...");
  return <p>{props.children}</p>;
};

export default Paragraph;