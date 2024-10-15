import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className='fixed top-0 w-full z-50 bg-black text-gray-200'>
      <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
        <Link
          to={isAuthenticated ? "/posts" : "/"}
          className='text-2xl font-bold hover:text-indigo-400 transition-colors'
        >
          POST FULL
        </Link>
        <ul className='flex items-center space-x-4'>
          {isAuthenticated ? (
            <>
              <Link to={"/profile"}>
                <img
                  src='https://avatars.dicebear.com/api/avataaars/seed.svg'
                  alt='useravatar'
                  className='w-8 h-8 rounded-full bg-white shadow-md '
                />
              </Link>
              <li>
                <Link
                  to='/add-post'
                  className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  ADD POST
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className='text-sm hover:text-indigo-400 transition-colors'
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to='/login'
                  className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='/register'
                  className='bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors'
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
