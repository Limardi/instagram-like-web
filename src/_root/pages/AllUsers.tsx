import Loader from '@/components/shared/Loader';
import UserCard from '@/components/shared/UserCard';
import { useGetUsers } from '@/lib/react-query/queriesAndMutation';


const AllUsers = () => {
  const { data: users, isLoading: isUserLoading, isError: isErrorCreators, } = useGetUsers();

  return (
    <div className='common-container'>
      <div className='user-container'>
        <div className='flex-start gap-2'>
          <img src="/assets/icons/people.svg" width={36} height={36} className='invert-white'/>
          <h3 className='h3-bold'>All Users</h3>
        </div>
          {isUserLoading && !isErrorCreators? (
            <Loader />
          ) : (
            <ul className='user-grid'>
              {users?.documents.map((user) => (
                <li className='flex-1 min-w-[200px] w-full'> <UserCard user={user}/> </li>
              ))}
            </ul>
          )}
      </div>
    </div>

  )
}

export default AllUsers