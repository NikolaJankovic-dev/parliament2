import './App.css';
import Page1 from './components/Page1';
import {useEffect, useState} from 'react';
import Page2 from './components/Page2';

function App() {
  const [phase, setPhase] = useState(0);
  const [page, setPage] = useState(<Page1 phase={phase} setPhase={setPhase}/>);
  let children = <Page1 phase={phase} setPhase={setPhase}/>;
  useEffect(() => {
    if (phase < 3) {
      setPage(<Page1 phase={phase} setPhase={setPhase}/>);
    }
    if (phase === 3) {
      setPage(<Page2 phase={phase} setPhase={setPhase}/>);
    }
  },[phase]);
  
  return (
    <div className="App"  style={{height: window.innerHeight}}>
      {page}
    </div>
  );
}

export default App;
