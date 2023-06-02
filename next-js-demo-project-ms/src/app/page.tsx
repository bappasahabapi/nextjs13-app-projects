// import { store } from "@/store";
// import { setStartupUser } from "@/store/searchSlice";
// import axios from "axios"
import Link from "next/link";

export default async function Home() {
  // try {
  //   const { data } = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=5");
  //   store.dispatch(setStartupUser(data));
  // } catch (error) {
  //   console.log("Error")
  // }

  return (
    <>
    <h1 className="text-center mt-5">Home-page</h1> 
    
    <main className="flex min-h-screen gap-4 p-24">
      
      <Link href={"/users"}>Users</Link>
      <Link href={"/SSRusers"}>SSRusers</Link>
      <Link href={"/clientToServer"}>ClientToServer</Link>
      <Link href={"/bappa"}>Bappa</Link>
    </main>
    </>
  )
}
