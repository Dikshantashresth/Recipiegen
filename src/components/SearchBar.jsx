import React, { use } from 'react'
import { useState } from 'react'
import { useUsercontext } from '../context/userContext';
import axios from 'axios';
import {motion} from 'framer-motion';

const SearchBar = ({setRecipie}) => {
  
  const [Query,setQuery] = useState();
  
  const fetchQuery = async ()=>{
    const result = await axios.get(`http://localhost:5000/search?title=${Query}`);
    if(result){
      setRecipie(result.data);
    }
  }
  const handleClick = async()=>{
    
    fetchQuery();
    
  }
  return (
    <motion.div className='flex items-center justify-center w-full mt-5 gap-2' initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <input type="text" placeholder='Italian Pizza' value={Query}  onChange={(e)=>setQuery(e.target.value)}className='text-white border-2 rounded-md p-2 w-full'/>
      <button onClick={handleClick} className='text-emerald-400 bg-white p-2 rounded-md cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>
    </motion.div>
  )
}

export default SearchBar
