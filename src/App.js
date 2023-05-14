import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);
  return (
    <div  className="app">
     <h1>React under the Hood</h1>
    {isParagraphShown && <p>New Paragraph</p>}
    </div>
  );
}

export default App;
