import Paragraph from "./Paragraph";
import React from "react";

const ParagpaphOutput = (props) => {
    console.log('ParagraphOutput component running...');
    return (
        <Paragraph>{ props.isShown ?"New Paragraph":""}</Paragraph> 
    );
};

export default React.memo(ParagpaphOutput);