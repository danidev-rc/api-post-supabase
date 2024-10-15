import { useForm } from "react-hook-form";
import { usePosts } from "../context/PostsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function PostFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createPost, updatePost, getPost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        const post = await getPost(params.id);
        setValue("title", post.title);
        setValue("description", post.description);
        setValue("date", dayjs(post.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadPost();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updatePost(params.id, dataValid);
    } else {
      createPost(dataValid);
    }
    navigate("/posts");
  });

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            placeholder='Title'
            {...register("title")}
            autoFocus
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          <label htmlFor='description'>Description</label>
          <textarea
            rows='3'
            placeholder='Description'
            {...register("description")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></textarea>

          <label htmlFor='date'>Date</label>
          <input
            type='date'
            {...register("date")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          <button className='bg-indigo-500 px-3 py-1 rounded-md'>Save</button>
        </form>
      </div>
    </div>
  );
}
