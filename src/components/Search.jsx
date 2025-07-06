import React from 'react'
import SearchBar from './SearchBar'
import { Typography } from '@mui/material'
import RecipieCard from './RecipieCard'
import { useState } from 'react'
import {motion}  from 'framer-motion'
const Search = () => {
  const [Result,setResult] = useState([]);
  
  return (
    <div>
      <SearchBar setRecipie={setResult}/>
      <motion.div initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="result-heading py-3">
        <Typography variant='h6' className='text-white font-bold mt-5  '>
          Results for 
          </Typography>
      </motion.div>
           <div className='flex flex-wrap gap-10 sm:justify-center md:justify-start'>
        {Result.length > 0 ? (
          Result.map((recipie, i) => <RecipieCard key={i} recipie={recipie} />)
        ) : (
          <p className='text-white'>No results found.</p>
        )}
      </div>

    </div>
  )
}

export default Search
