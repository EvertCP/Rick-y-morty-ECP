import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/navBar/navBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail"
import Forms from "./components/Forms/forms"
import Favorite from './components/Favorite/favorite';

function App () {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) =>{
      await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
           const aux = characters.filter((char) => char.id === data.id)
          if(!aux.length)  return setCharacters(oldChars => [...oldChars, data]);
          return window.alert('Perosnaje ya agregado');
          }else {
            window.alert('No hay personajes con ese ID');
         }
        });
  }

  const onClose = async (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  const location = useLocation();
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "example@gmail.com";
  const password = "password1";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }else{
      alert('datos invalidos')
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  

  return (
    <div className='App'>
           {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  )
} 

export default App