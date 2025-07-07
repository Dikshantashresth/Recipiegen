import React, {useEffect, useState} from 'react'

import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
const Logginout = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const [state,setState] = useState(false);
    const performLogout = async () => {
      try {
        await axios.get(`/logout`, { withCredentials: true });
        navigate('/login');
        setState(true)
      } catch (err) {
        console.error('Logout failed:', err);
      }
    };

    performLogout();
  }, [navigate,state]);

  return (
    <div className="text-white text-center mt-10">
      Logging out...
    </div>
  );
}

export default Logginout
