import React,{useEffect,useState}from 'react';
import Recepte from './Recepte';
import './App.css';

const App = () =>{
  const APP_ID = "9fc97f47";
  const APP_KEY = "8f8e2b7ecbe9313e57983208139119ef";

  const [receptes, setReceptes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('query');
  useEffect(()=>{
    getReceptes();
  }, [query]);

  const getReceptes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setReceptes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange = {updateSearch} />
        <button className="search-button" type="submit"> Busqueda</button>
      </form>
      <div className="receptes">
        {receptes.map(recepte =>(
        <Recepte  
          key= {recepte.recipe.label} 
          title = {recepte.recipe.label} 
          calories = {recepte.recipe.calories} 
          image={recepte.recipe.image} 
          ingredients={recepte.recipe.ingredients}  
        />
      ))}
      </div>
    </div>
  );
};

export default App;
