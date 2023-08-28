import Link from "next/link";
import { User } from "../types/User";
import getUsers from "../utils/getUsers"
import type { Metadata } from "next";

export const metadata : Metadata = {
  title : 'User Page',
  description : 'This is the users page'
}


const UserPage = async () => {

    
    const users : User = await getUsers();
    // console.log(users);

  return (
    <>
        <h1 className="p-4">These are the users on this app</h1>

        <div className="p-4 mx-4 rounded  space-y-2 inline-block">
            {users?.map(({id, name}) => (
                <>
                <Link href={`/users/${id}`} key={id}>
                    <h1 className="text-xl">{id} : <span className="border-b-2 border-b-white">{name}</span></h1>
                   {/* <Link href={`mailto:${user?.email}`} className="hover:scale-150 duration-200 text-sm">
                    {user?.company?.name} Company
                   </Link> */}
                </Link>
                </>
            ))}
        </div>
    </>
  )
}

export default UserPage