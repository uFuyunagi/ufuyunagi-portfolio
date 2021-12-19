import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './views/organisms/Header';
import Footer from './views/organisms/Footer';
import Portfollio from './views/pages/Portfollio';
import Profile from './views/pages/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/portfollio" element={<Portfollio />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
