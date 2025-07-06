import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Logginout = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_URL}/logout`, { withCredentials: true });
        navigate('/login');
      } catch (err) {
        console.error('Logout failed:', err);
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div className="text-white text-center mt-10">
      Logging out...
    </div>
  );
}

export default Logginout
