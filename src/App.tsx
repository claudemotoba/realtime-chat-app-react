import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Layout from './components/layout/layout/Layout';
import Home from './pages/home/Home';
import Messanger from './pages/messenger/Messanger';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<Layout />}>
            <Route path="messanger" element={<Messanger />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
