import React from "react";
import { Button } from 'react-bootstrap';

interface DisplayUserProps {
  farmers:UserObj[]
}

interface UserObj {
  firstName: string;
  lastName: string;
}
const Retreive = ({farmers}: DisplayUserProps) => {
    return (
      <>
      <h1>View Users</h1>
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
                    <td>{farmer?.firstName}</td>
                    <td>{farmer?.lastName}</td>
                  </tr>
                );
              }) : ""}
          </tbody>
        </table>
            <Button type="button" variant="outline-success">Add Farmer</Button>{' '}
        </>
    );
}

export default Retreive;