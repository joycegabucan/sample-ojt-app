import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DisplayUser from './pages/DisplayUser';
import AddUser from './pages/AddUser';
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
            <Route path='/add' element={<AddUser callback={createUserFunc} />}></Route>
            <Route path='/display' element={<DisplayUser farmers={farmers}/>}></Route>
            {/* <Route path='/reports' element={<Retrie  */}
          </Routes>
      </BrowserRouter>
      <img src="background.jpeg" alt="" />
    </div>
  );
}

export default App;
