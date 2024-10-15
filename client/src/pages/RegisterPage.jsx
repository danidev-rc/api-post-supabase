import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/posts");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        {registerErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white' key={i}>
            {error}
          </div>
        ))}
        <h1 className='text-3xl font-bold my-2 text-white'>Register</h1>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            {...register("username", { required: true })}
            placeholder='Username'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {errors.username && (
            <p className='text-red-500'>username is required</p>
          )}

          <input
            type='email'
            {...register("email", { required: true })}
            placeholder='Email'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />

          {errors.email && <p className='text-red-500'>username is required</p>}
          <input
            type='password'
            {...register("password", { required: true })}
            placeholder='Password'
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {errors.password && (
            <p className='text-red-500'>username is required</p>
          )}

          <button
            type='submit'
            className='w-full bg-sky-500 text-white px-4 py-2 rounded-md my-2'
          >
            Register
          </button>
        </form>
        <p className='flex gap-x-2 justify-between text-white'>
          Already have an account?
          <Link to='/login' className='text-sky-500'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
