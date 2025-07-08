import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from '../utils/axios'
const MyRecipieCard = ({ recipie ,handler}) => {
   
    const MotionBox = motion(Box);
    return (
        <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            p={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            }}
            className="bg-zinc-700 rounded-lg shadow-md text-white"
        >
            <h2 className="text-xl font-semibold mb-2 line-clamp-1">{recipie.recipiename}</h2>

            {/* This section grows to take up available space */}
            <div className="flex-grow bg-zinc-500 p-2 rounded overflow-hidden">
                <p className="line-clamp-6 text-sm">{recipie.desc}</p>
            </div>
            <div className="flex gap-2"><Link to={`/dashboard/recipiedetail/${recipie._id}`}>
                <button className="bg-emerald-500 hover:bg-emerald-600 transition mt-4 text-white p-2 rounded-md cursor-pointer">
                    View Recipie
                </button>
            </Link>
                <button className="bg-amber-500 hover:bg-amber-600 transition mt-4 text-white p-2 rounded-md cursor-pointer " onClick={handler(recipie.user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </button></div>

        </MotionBox>
    )
}

export default MyRecipieCard
