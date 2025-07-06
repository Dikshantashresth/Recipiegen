import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from '../utils/axios'

import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useUsercontext } from '../context/userContext';
import { useEffect } from 'react';


const Login = () => {
    
    const {setUserId,setUsername,userId,loading} = useUsercontext();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
  if (!loading && userId) {
    navigate('/dashboard');
  }
}, [loading, userId]);

if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post(`/login`, {
                email,
                password
            }, {
                withCredentials: true
            });
            if(response.data){
                
                setUsername(response.data.username);
                setUserId(response.data.id || response.data._id); 
                navigate('/dashboard');
            }
            
        
        } catch (error) {
  if (error.response) {
    setError(error.response.data.message);
        } else {
    alert('Network or server error');
  }
}
    }

        return (
        <div
            className='h-screen bg-zinc-900 overflow-hidden'>
            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}>

                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} flexDirection={'column'}>
                    <form className='text-white w-100 mx-auto bg-zinc-800 p-5 rounded-md' onSubmit={handleSubmit} >
                        {error && <Typography variant='body2' className='text-red-500 mb-3 text-center ' fontSize={16}>{error}</Typography>}
                        <Typography variant='h4' className=' text-white' sx={{ marginBottom: 3 }}>Login</Typography>
                        
                        <input
                            type="email"
                            placeholder='email'
                            className='block w-full rounded-md p-5 mb-5 border'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder='password'
                            className='block w-full rounded-md p-5 mb-2 border'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Button variant="contained"  type="submit" className='mt-4 w-full h-15' >
                            Login
                        </Button>
                        <Typography variant='body2' className='text-white mt-3 text-center'>
                            Don't have an account? <Link to="/register" className='text-emerald-500'>Register</Link></Typography>
                    </form>
                </Box>
            </motion.div>
        </div>
    )
}

export default Login
