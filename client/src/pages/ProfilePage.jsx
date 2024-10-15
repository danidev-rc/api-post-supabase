import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function ProfilePage() {
  const { getProfile, user } = useAuth();

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Perfil de Usuario
        </h1>
        <div className='flex items-center mb-4'>
          <FaUser className='text-gray-500 mr-3' />
          <p className='text-gray-700 text-lg'>Nombre: {user.username}</p>
        </div>
        <div className='flex items-center'>
          <FaEnvelope className='text-gray-500 mr-3' />
          <p className='text-gray-700 text-lg'>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
