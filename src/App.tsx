import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import RetrieveProduct from './pages/RetrieveProduct';
import CreateProduct from './pages/CreateProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path='/add' element={<CreateProduct />}></Route>
            <Route path='/display' element={<RetrieveProduct/>}></Route>
            <Route path='/reports' element={<RetrieveProduct/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
