import React, { useRef } from "react";


function localStorage() {
    const data = useRef();
    const handleClick=()=>{
        console.log(data.current.value,  "initial value")
        localStorage.setItem('users', JSON.stringify([{idNumber: 'asa', firstName: 'mani', lastName: 'masave'}]));
    }
    console.log(localStorage.getItem("idInput"))
    return(
        <>
        <input ref={data}/>

        <Button onClick={handleSubmit} type="button" id="addUser" variant="outline-success">Add</Button>{' '}
        </>
    )
}
export default localStorage;