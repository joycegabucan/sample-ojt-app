import { useState } from 'react';
import { Button } from 'react-bootstrap';

interface UserObj {
  idNumber: number;
  firstName: string;
  lastName: string;
}

function DisplayUser () {
  let users:UserObj[] = JSON.parse(localStorage.getItem("users")!) || [];
  return (
      <>
      <h1>View Users</h1>
       
      <table className='table'>
        <thead>
          <tr>
            {users.length > 0 }
            <th>ID Number</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.length ?
            users.map((user: UserObj, key: any) => {
              return (
                <tr key={key}>
                  <td>{user?.idNumber}</td>
                  <td>{user?.firstName}</td>
                  <td>{user?.lastName}</td>
                </tr>
              );
            }) : ""}
        </tbody>
      </table>
      </>
    );
}
export default DisplayUser;
