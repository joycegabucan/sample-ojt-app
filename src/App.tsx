import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import RetrieveProduct from './pages/RetrieveProduct';
import CreateProduct from './pages/CreateProduct';
import './App.css';
import Home from './pages/Home';

interface UserObj {
  firstName: string;
  lastName: string;
}

  const createUserFunc = (farmer:UserObj) =>{
    console.log("users", farmer);
  };

function App() {
const [farmers, setFarmers]= useState<any[]>([]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/add' element={<CreateProduct callback={createUserFunc} />}></Route>
            <Route path='/display' element={<RetrieveProduct farmers={farmers}/>}></Route>
            {/* <Route path='/reports' element={<Retrie  */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
