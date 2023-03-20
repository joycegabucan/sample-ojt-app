import { stringify } from "querystring";
import { useRef, useState } from "react";
import { Button} from 'react-bootstrap';
import App from "../App";

interface UserObj {
    idNumber: number;
    firstName: string;
    lastName: string;
}
const Create = () => {
    let users:UserObj[] = JSON.parse(localStorage.getItem("users")!) || [];
    const [user, setUser] = useState();
    const [deleteUser, setDeleteUser] = useState();
    
    const handleSubmit = (event: any) =>{
        if(user){
            let array: any[] = []
            
            array = JSON.parse(localStorage.getItem('users')!) || [];
            array.push(user);
            window.localStorage.setItem('users', JSON.stringify(array));
            console.log(array);
        }
        // localStorage.setItem('users', JSON.stringify([{idNumber: '100', firstName: 'Joyce', lastName: 'Catubig'}]));
    };
    // const getDatafromLS=()=>{
    //     let data = localStorage.getItem('users');
    //     if(data){
    //        JSON.parse(data);
    //        localStorage.removeItem(data);
    //        console.log(data);
    //     }
    //     else{
    //       return []
    //     }
    //   };
      //ma delete tanan
      const handleDelete = () =>{
        if(users){
            localStorage.removeItem('users');
        }
     };
    
    const handleChange = (event: any) => {
        setUser((oldDataInput: any) =>({
            ...oldDataInput,
            [event.target.name]: event?.target.value,
        }));
    };
    
    return(
        <div>
            <h1>Add Users</h1> 
            
            <div>
                ID Number:
                <input type="string" name='idNumber' id="idInput" onChange={handleChange}/>
            </div>
            <div>
                First Name:
                <input type="string" name='firstName' id="fNameInput" onChange={handleChange}/>
            </div>
            <div>
                Last Name:
                <input type="string" name='lastName' id="lNameInput" onChange={handleChange}/>
            </div>
            <br/>
            <Button onClick={handleSubmit} type="button" id="addUser" variant="outline-success">Add User</Button>{' '}
            <Button onClick={handleDelete} type="button" id="delUser" variant="outline-success">Remove User</Button>{' '}
        </div>
    );
}


export default Create;