

const ParagpaphOutput = (props) => {
    console.log('Paragraph component running...');
    return (
        <p>{props.isShown ? 'New Paragraph': ''}</p>
    );
};

export default ParagpaphOutput;