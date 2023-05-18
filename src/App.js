import { useState, useCallback } from 'react';
import './App.css';
import Button from './components/UI/Button';
import ParagpaphOutput from './components/Output/ParagraphOutout';

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const [isTogglingActivated, setIsTogglingActivated] = useState(false);
  console.log('App component running...');
  const toogleParagraph = useCallback(() => { 
    if (isTogglingActivated)
    setIsParagraphShown(prevIsParagraphShown => !prevIsParagraphShown); },[isTogglingActivated]);
  const activateToggling = () => {setIsTogglingActivated(true)}
  return (
    <div  className="app">
     <h1>React under the Hood</h1>
     <ParagpaphOutput isShown={isParagraphShown}/>
     <Button onClick={toogleParagraph}>Toggle Paragraph</Button>
     <Button onClick={activateToggling}>Activate Switching</Button>
    
    </div>
  );
}

export default App;
