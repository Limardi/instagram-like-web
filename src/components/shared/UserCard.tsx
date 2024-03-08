import { Models } from "appwrite"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

type UserCardProps = {
  user: Models.Document
}

//di pass by id nya from the right side bar tinggal buat ui nya
const UserCard = ({ user } : UserCardProps) => {

  return (
    <div className="user-card">
          <Link to = {`/profile/${user.$id}`}>
            <img 
              src= {user.imageUrl || 'assets/icons/profile-placeholder.svg'}
              alt="user"
              className="rounded-full w-[54px] h-[54px]"
            />
          </Link>
          <div className="flex-center flex-col gap-1"> 
            <p className="base-medium text-light-1 text-center line-clamp-1"> { user.name } </p>
            <p className="small-regular text-light-3 text-center line-clamp-1"> @{user.username}</p>
          </div>

          <Button
            type="button"
            size={'sm'}
            className="shad-button_primary px-5"
          >
            Follow
          </Button>
      </div>
  )
}

export default UserCard