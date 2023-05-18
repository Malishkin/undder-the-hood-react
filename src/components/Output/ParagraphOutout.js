import Paragraph from "./Paragraph";

const ParagpaphOutput = (props) => {
    console.log('ParagraphOutput component running...');
    return (
        <Paragraph>{ props.isShown ?"New Paragraph":""}</Paragraph> 
    );
};

export default ParagpaphOutput;