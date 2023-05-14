import { useState } from 'react';
import './App.css';

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
