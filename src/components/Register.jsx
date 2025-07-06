import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { color } from 'motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await axios.post(`${import.meta.env.VITE_URL}/register`,{username,email,password},{withCredentials: true});
        if(res){
            console.log(res.data);
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
                        <Typography variant='h4' className=' text-white' sx={{ marginBottom: 3 }}>Register</Typography>
                        <input
                            type="text"
                            placeholder='username'
                            className='block w-full rounded-md p-5 mb-5 border'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
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
                        <Button variant="contained" color="primary" type="submit" className='mt-4 w-full h-15'>
                            Register
                        </Button>
                        <Typography variant='body2' className='text-white mt-3 text-center'>
                            Already have an account? <Link to="/login" className='text-emerald-500'>Login</Link></Typography>
                    </form>
                </Box>
            </motion.div>
        </div>
    )
}

export default Register
