import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { getProfile, user } = useAuth();

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Nombre: {user.username}</p>
      <p>Nombre: {user.email}</p>
    </div>
  );
}
