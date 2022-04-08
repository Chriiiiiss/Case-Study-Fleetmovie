import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FleetAppContainer from './components/AppContainer/fleetAppContainer';
import HeaderFleetMovie from './components/Header/headerFleet';

import AppHome from './routes/appHome';

import logo from './logo.svg';
import './App.css';
import Movie from './routes/movie';



function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHome/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
