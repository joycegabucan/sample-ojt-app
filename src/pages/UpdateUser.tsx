import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";

interface updateProps{
    searchByIdCallback: (id:any)=>void;
    updateUser:any;
    updateCallback: (id:any)=>void;
}
interface UserObj {
    idNumber: number;
    firstName: string;
    lastName: string;
}

// const users:UserObj[] = JSON.parse(localStorage.getItem('users')!) || [];

// const updatedUser = { ...users[index], ...newUserData }
// users[index] = updatedUser

function UpdateUser({searchByIdCallback, updateCallback, updateUser}:updateProps) {
    let users:UserObj[] = JSON.parse(localStorage.getItem("users")!) || [];
    const [updatedUser, setUpdatedUser] = useState();

    const handleUpdate = (event:any)=>{
        if(users){
            updateCallback(updatedUser);
        }
    };
       const handleChange = (event: any) =>{
        console.log({updatedUser})

        setUpdatedUser(() => ({
            ...updateUser,
            [event.target.name]: event.target.value,
          }));
    };
        const searchById = (event: any) =>{
            console.log("searchbyID", event.target.value)
            searchByIdCallback(event.target.value)
        };

    return (
        <div>
            <h1>View Users</h1>
            <div>
                ID Number:
                <input type="number" name="idNumber" onChange={searchById}/>
            </div>
            <div>
                First Name:
                <input type="string" name="firstName" onChange={handleChange} defaultValue={updateUser?.firstName}/>
            </div>
            <div>
                Last Name:
                <input type="string" name="lastName" onChange={handleChange} defaultValue={updateUser?.lastName}/>
            </div>
            <br />
                <Button type="button" variant="outline-success" onClick={handleUpdate}>Update User</Button>
                {/* <table className='table'>
        <thead>
          <tr>
            {user.length > 0 }
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
      </table> */}
        </div>
      )
}
export default UpdateUser;