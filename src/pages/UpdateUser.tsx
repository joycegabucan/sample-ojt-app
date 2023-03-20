import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";

interface UserObj {
    idNumber: number;
    firstName: string;
    lastName: string;
}

function UpdateUser() {
    let users:UserObj[] = JSON.parse(localStorage.getItem("users")!) || [];
 
    if(users){
      console.log("found", users);
    }

    return (
        <div>
            <h1>Update Users</h1>
            <div>
                ID Number: 
                <input type="number" name="idNumber" />
            </div>
            <div>
                First Name:
                <input type="string" name="firstName" />
            </div>
            <div>
                Last Name:
                <input type="string" name="lastName" />
            </div>
            <br />
                <Button type="button" variant="outline-success" >Update</Button>
                
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
        </div>
      )
}

export default UpdateUser;