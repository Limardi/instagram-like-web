import { useGetUsers } from "@/lib/react-query/queriesAndMutation";
import UserCard from "./UserCard"
import Loader from "./Loader";

const RightSidebar = () => {
  const { data: users, isLoading: isUserLoading, isError: isErrorCreators, } = useGetUsers();

    return (
    <div className="rightsidebar">
            <h3 className="h3-bold w-142 mt-[24px]">
                Top Creators
            </h3>
            <div className="mt-[40px] ">
                {isUserLoading && !users?(
                  <Loader />
                ) :(
                  <ul className= "grid 2xl:grid-cols-2 gap-6">
                    {users?.documents.map((user) => (
                      <li>
                        <UserCard user ={user} />
                      </li>
                    ))}
                </ul>
                )}
            </div>
            

    </div>
  )
}

export default RightSidebar