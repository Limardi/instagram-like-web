import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import RightSidebar from "@/components/shared/RightSidebar";
import {  useGetRecentPost } from "@/lib/react-query/queriesAndMutation";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();
  const { data: posts,  fetchNextPage, hasNextPage } = useGetRecentPost();

  useEffect(() => {
    if(inView){
      fetchNextPage();
    }
    }, [inView]
  )

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Home Feed
          </h2>
          {!posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col dlex-1 gap-9 w-full">
              {posts.pages.map((items) => (
                items?.documents.map((item) => (
                  <PostCard post = {item} key={item.caption}/>
                ))
              ))}
            </ul>
          )}
        </div>
        {hasNextPage && (
        <div ref = {ref} className='mt-10'>
          <Loader />
        </div>
        )}
      </div>
      <RightSidebar />
    </div>

    
  )
}

export default Home