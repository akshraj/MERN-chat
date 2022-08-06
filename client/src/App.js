import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    (async function () {
      const res = await axios.post('/', {
        name: 'akshay raj singh'
      });
      console.log(res);
    })()
  }, []);

  return (
    <div className="App">
      Hello React
    </div>
  );
}

export default App;
