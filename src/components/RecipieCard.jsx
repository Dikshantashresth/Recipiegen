import React from 'react'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const RecipieCard = ({ recipie }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
    initial={{ opacity: 0,  y:40 }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 1 }}
      p={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        minHeight: '100px', 
        justifyContent: 'space-between', 
      }}
      className="bg-zinc-700 rounded-lg shadow-md text-white"
    >
      <h2 className="text-xl font-semibold mb-2 line-clamp-1">{recipie.recipiename}</h2>

      <div className="flex-grow bg-zinc-500 p-2 rounded overflow-hidden">
        <p className="line-clamp-8 text-sm">
          {recipie.desc}
        </p>
      </div>
<Link to={`recipiedetail/${recipie._id}`}>
      <button className="bg-emerald-500 hover:bg-emerald-600 transition mt-4 text-white p-2 rounded-md cursor-pointer">
        View Recipie
      </button></Link>
    </MotionBox>
  )
}

export default RecipieCard
