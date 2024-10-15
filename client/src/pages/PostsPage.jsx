import { useEffect } from "react";
import { usePosts } from "../context/PostsContext";
import PostsCard from "../components/PostsCard";

export default function PostsPage() {
  const { getPosts, posts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]); // Ahora getPosts se memoriza correctamente

  if (posts.length === 0)
    return <h1 className='text-white text-3xl'>No POSTS</h1>;

  return (
    <div className='px-4 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {posts.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
