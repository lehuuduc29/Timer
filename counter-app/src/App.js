import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1)
    }, 1000)

    if (count === 0){
      return () => { clearInterval(timer) }
    }
  }, [count])

  return (
    <div>
      <h2>Count down from : {count}</h2>
    </div>
  );
}

export default App;
