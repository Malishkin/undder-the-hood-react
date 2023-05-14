import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const toogleParagraph = () => { 
    setIsParagraphShown(prevIsParagraphShown => !prevIsParagraphShown); };
  return (
    <div  className="app">
     <h1>React under the Hood</h1>
     {isParagraphShown && <p>New Paragraph</p>}
     <Button onClick={toogleParagraph}>Toggle Paragraph</Button>
    
    </div>
  );
}

export default App;
