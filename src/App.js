import React,{Fragment, useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersLIst';


function App() {
  const[usersList,setUserList]=useState([]);
  const addUserHandler=(uName,uAge,uCollege)=>{
    setUserList((prevUserList)=>{
      return[
        ...prevUserList,
        {name:uName, age:uAge, college:uCollege, id: Math.random().toString()}
      ]
    })
  }

  
  return (
    <Fragment>
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
