import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.get('http://localhost:5000/logout', { withCredentials: true });
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
};

export default Logout;
