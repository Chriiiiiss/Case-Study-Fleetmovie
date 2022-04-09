import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import FleetAppContainer from './components/AppContainer/fleetAppContainer';
import HeaderFleetMovie from './components/Header/headerFleet';
import NotFound from './routes/notFound';

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
        <Route path="/404" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to="/404" replace />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
