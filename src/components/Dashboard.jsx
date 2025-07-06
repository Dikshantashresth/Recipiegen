import { Stack, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useUsercontext } from '../context/userContext';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const { username, userId } = useUsercontext();
  useEffect(() => {
  
  if (username === "" && userId === "") {
    navigate('/login');
  }
}, [username, userId, navigate]);

  const [iscollapsed, setiscollapsed] = useState(false);
    useEffect(() => {

        if (window.innerWidth < 768) {
            setiscollapsed(true);
        }
    }, []);
    const handleCollapse = () => {
        setiscollapsed(!iscollapsed);
    }
  return (
    <div className='h-screen flex' >
      <Sidebar iscollapsed={iscollapsed} handleCollapse={handleCollapse}/>

      <div className={`w-2/3 flex-4 bg-zinc-900 p-7 ${iscollapsed ? 'ml-0 mt-10' : 'ml-50 '}  `}>
        

        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
