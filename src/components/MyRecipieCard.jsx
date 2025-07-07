import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const MyRecipieCard = ({ recipie }) => {
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

  <Link to={`/dashboard/recipiedetail/${recipie._id}`}>
    <button className="bg-emerald-500 hover:bg-emerald-600 transition mt-4 text-white p-2 rounded-md cursor-pointer">
      View Recipie
    </button>
  </Link>
</MotionBox>
  )
}

export default MyRecipieCard
