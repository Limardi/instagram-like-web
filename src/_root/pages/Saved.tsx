import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext"
import { savePost } from "@/lib/appwrite/api";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutation";
import { Models } from "appwrite";

const Saved = () => {
  const { data:currentUser } = useGetCurrentUser();

  const savedPosts = currentUser?.save.map((savePost: Models.Document) => ({
    ...savePost.post,
    creator: {
      imageUrl: currentUser.imageUrl,
    }
  }))


  return (
      <div className='saved-container'>
        <div className="flex gap-2 w-full max-w-5xl">
          <img src="/assets/icons/save.svg"width={36} height={36} className="invert-white"/>
          <h3 className="h3-bold md: h2-bold text-left w-full">
            Saved Post
          </h3>
        </div>

        {!currentUser ? (
          <Loader />
        ) : (
          <ul>
            {savedPosts.length === 0 ? (
              <p>
                No available posts
              </p>
            ) : (
              <GridPostList posts = {savedPosts} showStats = {false} />
            )}
          </ul>
        )}

      </div>
  );
};

export default Saved

// @apply max-w-5xl flex flex-col items-start w-full gap-6 md:gap-9;