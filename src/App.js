import './App.css';
import Page1 from './components/Page1';
import {useEffect, useState} from 'react';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [phase, setPhase] = useState(0);
  const [page, setPage] = useState(<Page1 phase={phase} setPhase={setPhase}/>);
  useEffect(() => {
    if (phase <= 3 ) {
      setPage(<Page1 phase={phase} setPhase={setPhase}/>);
    }
    if (phase >= 4 && phase <= 6)   {
      setPage(<Page2 phase={phase} setPhase={setPhase}/>);
    }
    if (phase > 6) {
      setPage(<Page3 phase={phase} setPhase={setPhase}/>);
    }
  },[phase]);
  
  return (
    <div className="App"  style={{height: window.innerHeight}}>
      {page}
    </div>
  );
}

export default App;
