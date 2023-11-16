import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [ warehouses, setWarehouses ] = useState([])

  const getWarehouses = async() => {
    const { data } = await axios(`${process.env.REACT_APP_API_URI}/warehouses`);
    console.log(data);
    setWarehouses(data);
  }

  useEffect(() => {
    getWarehouses();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {JSON.stringify(warehouses)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          You already know React
        </a>
      </header>
    </div>
  );
}

export default App;
