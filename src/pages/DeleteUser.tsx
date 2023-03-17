import { useState } from "react";
import { Button } from "react-bootstrap";

  
interface UserObj {
  idNumber: number;
  firstName: string;
  lastName: string;
}
  function DeleteUser() {  
    const [user, setUser] = useState();
    let users:UserObj[] = JSON.parse(localStorage.getItem("users")!) || [];

  const getDatafromLS=()=>{
    let data = localStorage.getItem('users');
    if(data){
       JSON.parse(data);
       localStorage.removeItem(data);
       console.log(data);
    }
    else{
      return []
    }
  };
   
    const handleDelete = () => {
      if(user){
          console.log("das");
      array = JSON.parse(localStorage.getItem("users")!) || [];
      localStorage.removeItem('idNumber');
      localStorage.setItem('users', JSON.stringify(array));
      }
  }
    return(
        <>
        <h1>Delete Users</h1>
        <div>
            ID Number:
            <input type="number" name="idNumber"/>
            <br />
            <Button onClick={getDatafromLS} type="button" id="delUser" variant="outline-success">Remove User</Button>{' '}
            <table className='table'>
        <thead>
          <tr>
            {users.length > 0 }
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        {/* <tbody>
          {users.length ?
            users.map((user: UserObj, key: any) => {
              return (
                <tr key={key}>
                  <td>{user?.idNumber}</td>
                  <td>{user?.firstName}</td>
                  <td>{user?.lastName}<button onClick={searchById}>Delete</button></td>
                </tr>
              );
            }) : ""}
        </tbody> */}
      </table>
        </div>
        </>
    )
}
export default DeleteUser;