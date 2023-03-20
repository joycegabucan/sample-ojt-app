import React, { useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DisplayUser from './pages/DisplayUser';
import DeleteUser from './pages/DeleteUser';
import AddUser from './pages/AddUser';
import './App.css';
import Home from './pages/Home';
import UpdateUser from './pages/UpdateUser';

interface UserObj {
  idNumber: any;
  firstName: string;
  lastName: string;
}

const getData =()=>{
  const data = localStorage.getItem('users');
  if(data){ 
     JSON.parse(data);
  }
  else{
    return []
  }
}
function App() {
const [users, setUsers]= useState<any[]>([getData]);
const [updateUser, setUpdateUser] = useState();
const [deleteUser, setDeleteUser] = useState();


const searchById = (id:any) =>{
  setUpdateUser(users.filter((user: UserObj) => {
      if (user?.idNumber === id) {
        return user;
      }
    })[0]
  );
};

const updateCallback =(updatevalue:any) => {
  setUsers(users.map((user) => {
//make this conditional statement
      if (user == user.idNumber) {
        user = updatevalue;
      }
      return updatevalue;
    })
  );
}

const searchByIdDelete = (val:any) =>{
  setDeleteUser(users.filter((user: UserObj) => {
      if (user?.idNumber === val) {
        return user;
      }
    })[0]
  );
  console.log(deleteUser);
};

const deleteFunc = (event: any) => {
setUsers(users.filter((user: any) => {
    if (user?.idNumber != event.idNumber) {
      return user;
    }
  })
);
};
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/add' element={<AddUser/>}></Route>
            <Route path='/display' element={<DisplayUser/>}></Route>
            <Route path='/delete' element={<DeleteUser/>}></Route>
            <Route path='/update' element={<UpdateUser/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
