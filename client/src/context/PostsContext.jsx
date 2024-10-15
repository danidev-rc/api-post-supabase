import { createContext, useContext, useState, useCallback } from "react";
import {
  createPostRequest,
  getPostRequest,
  getPostsRequest,
  updatePostRequest,
  deletePostRequest,
} from "../api/posts";

const PostsContext = createContext();

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await getPostsRequest();
    setPosts(res.data);
  }, []); // `useCallback` evita que se recree en cada render

  const createPost = async (post) => {
    try {
      const res = await createPostRequest(post);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      if (res.status === 204) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      await updatePostRequest(id, post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
