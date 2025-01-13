import { useLoaderData } from "react-router-dom";
import {User} from "../Users/loader"

export   function UsersPage(){
    const users = useLoaderData() as User ;
    console.log(users)
    console.log(users.email)
    console.log(users.last_name)

  return (
    <>
    <h2>Users</h2>
    {JSON.stringify(users)}
    <p>{users.first_name}</p>
    <p>{users.last_name}</p>
    <p>{users.email}</p>
    </>
  )
}

export default UsersPage
