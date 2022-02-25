import Counter from './components/Counter/Counter'
import Button from './components/Button/Button'
import Container from './components/Container/Container';
import { useState } from 'react';

const App = () => {

  const [time, setTime] = useState(0);
  const [stopwatch, setStopwatch] = useState(null); 
  
  const start = () => {
    setStopwatch(setInterval(() => setTime(time => time + 1), 1));
  };
  
  const stop = () => {
    clearInterval(stopwatch);
  }; 

  const reset = () => {
    setTime(time => time = 0);
  };

  return (
    <div>
      <Container>
        <Counter time={time}/>
        <Button param={start}>Start</Button> 
        <Button param={stop}>Stop</Button>  
        <Button param={reset}>Reset</Button>
      </Container> 
    </div>
  );
}

export default App;
