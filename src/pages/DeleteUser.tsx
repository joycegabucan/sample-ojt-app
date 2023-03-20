import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

  
interface UserObj {
  idNumber: number;
  firstName: string;
  lastName: string;
}
  function DeleteUser() { 
    let users:UserObj[] = JSON.parse(localStorage.getItem("users")!) || [];
    const [user, setUser] = useState(); 
    
    // const handleSubmit = (event: any) =>{
    //     if(user){
    //         let array: any[] = []
            
    //         array = JSON.parse(localStorage.getItem('users')!) || [];
    //         array.push(user);
    //         window.localStorage.setItem('users', JSON.stringify(array));
    //         console.log(array);
    //     }
    //     // localStorage.setItem('users', JSON.stringify([{idNumber: '100', firstName: 'Joyce', lastName: 'Catubig'}]));
    // };

  //ma delete tanan
  const handleDelete = () =>{
    if(users){
      localStorage.removeItem('users');
      console.log('users deleted');
      const newarr = users.filter((users:UserObj) => {
        return users;
      })
      console.log(newarr)
    }
 };
    return(
        <>
        {/* <button onClick={() =>{
          setHobby([...hobby, ''])
        }}>Add Hobby</button>
        {
          hobby.map((item, index) =>{
            return <div>
              <input value={item} />
              <button onClick={() => {
                const newarr = hobby.filter((i, j) =>{
                  return index !== j
                } )
                console.log(newarr)
                setHobby(newarr)
              }}>Delete</button>
            </div>
          })
        } */}
        <h1>Delete Users</h1>
        <div>
            <div>
                ID Number:
                <input type="string" name='idNumber' id="idInput" />
            </div>
            <div>
                First Name:
                <input type="string" name='firstName' id="fNameInput"/>
            </div>
            <div>
                Last Name:
                <input type="string" name='lastName' id="lNameInput"/>
            </div>
            <br />
            <Button onClick={handleDelete} type="button" variant="outline-success">Delete User</Button>{' '}
            <br /> <br />
            <table className='table'>
        <thead>
          <tr>
            {users.length > 0 }
            <th>ID Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
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
                  <td><Button variant="outline-danger" onClick={handleDelete}>Delete</Button></td>
                </tr>
              );
            }) : ""}
        </tbody>
      </table>
        </div>
        </>
    )
}
export default DeleteUser;