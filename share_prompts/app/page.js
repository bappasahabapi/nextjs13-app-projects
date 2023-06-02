// // http://localhost:3000/

import Link from "next/link";

// const Home = async() => {

//   const res =await fetch('https://jsonplaceholder.typicode.com/users');
//   const data =await res.json();

//   return <h1>{data.id}</h1>


//   // return <div className="w-full flex-center flex-col"> 
//   //   <h1 >This is the by default Home page</h1>
//   //   <p>{data.id}</p>

  
//   // </div>;
// };

// export default Home;



export default async function Page(){
  // const res =await fetch('https://api.github.com/repos/vercel/next.js');
  const res =await fetch('https://jsonplaceholder.typicode.com/users');
  const data =await res.json();

  const datajson =data[0]

  return(<div>
    <h1>This is home page data fetching from this url  </h1>
    <span>https://api.github.com/repos/vercel/next.js </span>

     <p>id:{data.id}</p>
     <p> name:{data.name}</p>
     <p> from json placeholder name: <b>{datajson.name}</b> </p>
     <Link href='/api/users'>got to user</Link>
     <Link href='/blog'>blog</Link>
  </div>
  )
}