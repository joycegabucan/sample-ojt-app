import { useState } from "react";
import { Button} from 'react-bootstrap';

interface CreateUserProps{
    callback: (userObj: UserObj) => void;
}

interface UserObj {
    idNumber: number;
    firstName: string;
    lastName: string;
}

const a = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const b = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
console.log(a);
console.log(b[0]);

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
                ID Number:
                <input type="string" name='idNumber' onChange={handleChange}/>
            </div>
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