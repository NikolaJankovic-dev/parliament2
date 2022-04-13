import './App.css';
import Page1 from './components/Page1';
import {useEffect, useState} from 'react';

function App() {
  const [phase, setPhase] = useState(0);
  let children = <Page1 phase={phase} setPhase={setPhase}/>;
  useEffect(() => {
    if (phase < 4) {
      children = <Page1/>;
    }
  },[phase]);
  
  return (
    <div className="App"  style={{height: window.innerHeight}}>
      {children}
    </div>
  );
}

export default App;
