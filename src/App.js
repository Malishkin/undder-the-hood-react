import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';
import ParagpaphOutput from './components/Output/ParagraphOutout';

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);
  console.log('App component running...');
  const toogleParagraph = () => { 
    setIsParagraphShown(prevIsParagraphShown => !prevIsParagraphShown); };
  return (
    <div  className="app">
     <h1>React under the Hood</h1>
     <ParagpaphOutput isShown={isParagraphShown}/>
     <Button onClick={toogleParagraph}>Toggle Paragraph</Button>
    
    </div>
  );
}

export default App;
