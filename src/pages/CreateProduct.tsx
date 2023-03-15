import React, { useState } from "react";
import { Button, Col, Container, Form, Row, ThemeProvider} from 'react-bootstrap';

interface CreateUserProps{
    callback: (userObj: UserObj) => void;
}

interface UserObj {
    firstName: string;
    lastName: string;
}

const Create = ({callback}: CreateUserProps) => {
    const [farmer, setFarmer] = useState();
    const handleSubmit = (event: any) =>{
        if(farmer){
            callback(farmer);
        }
    };
    const handleChange = (event: any) => {
        setFarmer((oldDataInput: any) =>({
            ...oldDataInput,
            [event.target.name]: event?.target.value,
        }));
    };
    return(
        <div>
            <h1>Add Users</h1> 
            
            <div>
                First Name:
                <input type="string" name='firstName' onChange={handleChange}/>
            </div>
        <div>
            Last Name:
            <input type="string" name='lastName' onChange={handleChange}/>
        </div>
            <Button onClick={handleSubmit} type="button" variant="outline-success">Add Farmer</Button>{' '}
        </div>
    );
}


export default Create;