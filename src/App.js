/* eslint-disable jsx-a11y/heading-has-content */
import React,{useEffect,useState}from 'react';
import './App.css';

function App() {
  const App = () =>{
    const APP_ID = "9fc97f47";
    const APP_KEY = "8f8e2b7ecbe9313e57983208139119ef";

    const request = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  }


  const [counter,setCounter] = useState (0);

  useEffect(()=>{
    console.log("Efecte Iniciat")
  },[]);

  return(
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search-button" type="submit"> Busqueda</button>
     </form>
    <h1  onClick={() => setCounter(counter+1)} >{counter}</h1>
    </div>
  );
}

export default App;
