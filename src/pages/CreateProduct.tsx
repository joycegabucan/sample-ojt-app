import React from "react";
import { Button, Form} from 'react-bootstrap';


const Create = ({props}: any) => {
    return(
        <div>
            <h1>View Users</h1> 
            <Button variant="outline-success">Farmer</Button>{' '}
            <Button variant="outline-success">LGU/NGO</Button>{' '}
        </div>
    );
}

export default Create;