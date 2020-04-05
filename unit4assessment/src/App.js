import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PokemonDisplay from './components/PokemonDisplay';
import Error from './components/Error';
import Pokemon from './components/Pokemon';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={"/"}>
          <Home/>
        </Route>
        <Route exact path={"/pokemon"}>
          <Pokemon/>
        </Route>
        <Route path={"/pokemon/:name"}>
          <PokemonDisplay/>
        </Route>
          
        <Route path={'*'}>
          <Error/>
        </Route>
      </Switch> 
      <Footer/>
    </div>
  );
}

export default App;
