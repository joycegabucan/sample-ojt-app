import React, { useState } from "react";
import { Button } from 'react-bootstrap';

interface DisplayUserProps {
  farmers:UserObj[]
}

interface UserObj {
  idNumber: number;
  firstName: string;
  lastName: string;
}

const DisplayUser = ({farmers}: DisplayUserProps) => {
const handleChange = (event: any) => {
  setFarmer((oldDataInput: any) =>({
      ...oldDataInput,
      [event.target.name]: event?.target.value,
  }));
};
    return (
      <>
      <h1>View Users</h1>
      
      <div>
        ID Number:
          <input type="string" name='idNumber' onChange={handleChange}/>
      </div>
      
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {farmers.length ?
            farmers.map((farmer: UserObj, key: any) => {
              return (
                <tr key={key}>
                  <td>{farmer?.idNumber}</td>
                  <td>{farmer?.firstName}</td>
                  <td>{farmer?.lastName}</td>
                </tr>
              );
            }) : ""}
        </tbody>
      </table>
          <Button type="button" variant="outline-success">View Farmer</Button>{' '}
      </>
    );
}

export default DisplayUser;

function setFarmer(arg0: (oldDataInput: any) => any) {
  throw new Error("Function not implemented.");
}
