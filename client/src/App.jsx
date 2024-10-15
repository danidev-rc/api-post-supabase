import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import PostFormPage from "./pages/PostFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import { PostsProvider } from "./context/PostsContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <Navbar />
          <main className='container mx-auto py-20'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/posts' element={<PostsPage />} />
                <Route path='/add-post' element={<PostFormPage />} />
                <Route path='/posts/:id' element={<PostFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;

