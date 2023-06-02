import React from "react";

const User = async() => {

  const res =await fetch('https://jsonplaceholder.typicode.com/users');
  const data =await res.json();

  const dataJson =data[0]



  return (
    <div>
      <h1> User comming from json place holder</h1>
      {/* <h3>ID: {dataJson.id} and the name is:  {dataJson.name} </h3> */}
     
    </div>
  );
};

export default User;

/* const users=[
        {id:1, name:'jhon'},
        {id:2, name:'two'},
        {id:3, name:'three'}
    ]
    // send the user to a response
    return new Response(JSON.stringify(users)) */
