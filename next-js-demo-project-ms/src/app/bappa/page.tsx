import { DataFetchError } from "@/components/exceptions";
import { store } from "@/store";
import { setStartupUser } from "@/store/searchSlice";
import axios from "axios";


const Bappa = async() => {

    let bUsers: [{ id?: string, name?: string,website?:string }];

    try {
        const  {data} =await axios.get("https://jsonplaceholder.typicode.com/users?_limit=3", {})
        store.dispatch(setStartupUser(data));
         bUsers=data;
    } catch (error) {
        console.log("Error from user page",error) 
        throw new DataFetchError()
    }



  return (
    <div className="flex flex-col items-center justify-center h-screen p-24">
        {bUsers.map((bUser)=>
        (<div className="w-full" key={bUser.id}>
            <h1>{bUser.name}</h1>
        </div>))}
       
    </div>
  )
}

export default Bappa