import { usePosts } from "../context/PostsContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

dayjs.extend(utc);

function PostsCard({ post }) {
  const { deletePost } = usePosts();
  const [position, setPosition] = useState(0);

  // Efecto para la animación de borde brillante
  useEffect(() => {
    const animateGlow = () => {
      setPosition((prevPosition) => (prevPosition + 1) % 360);
    };

    const intervalId = setInterval(animateGlow, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex justify-center items-center bg-gray-100'>
      <div className='relative max-w-md w-full'>
        {/* Borde animado con conic-gradient */}
        <div
          className='absolute inset-0 rounded-2xl'
          style={{
            background: `conic-gradient(from ${position}deg at 50% 50%, #3b82f6 0deg, transparent 60deg, transparent 300deg, #3b82f6 360deg)`,
          }}
        ></div>

        {/* Contenido de la tarjeta */}
        <div className='relative bg-zinc-800 rounded-xl p-6 m-0.5 shadow-lg text-slate-200'>
          <header className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-bold text-white'>{post.title}</h1>
          </header>
          <div className='flex items-center text-slate-300 mb-4'>
            <FaCalendarAlt className='mr-2' />
            <span>{dayjs(post.date).utc().format("MMMM DD, YYYY")}</span>
          </div>
          <p className='text-slate-300 mb-6'>{post.description}</p>
          <div className='flex justify-end gap-4 items-center'>
            <button
              onClick={() => deletePost(post.id)}
              className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out'
            >
              Delete
            </button>
            <Link
              to={`/posts/${post.id}`}
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out'
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsCard;
