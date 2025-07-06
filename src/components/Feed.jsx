import React, { useEffect, useState } from 'react'
import RecipieCard from './RecipieCard'
import { Stack } from '@mui/material'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useUsercontext } from '../context/userContext'
import {motion} from 'framer-motion'
const Feed = () => {
  const [Recipies, setRecipies] = useState([]);
  const { username } = useUsercontext();
  useEffect(() => {
    const fetchRecipie = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/recipies`, { withCredentials: true });
        if (response.status === 200 || response.status === 201) {
          setRecipies(response.data);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipie(); 
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
      <Stack sx={{ margin: '0px' }}>
        <div className="text-white text-5xl font-bold">
          <h1>Welcome, {username}</h1>
        </div>

        <div className="addButton">
          <Link to={'addrecipie'}>
            <button className="bg-emerald-500 text-white rounded-md p-2 gap-2 text-center flex hover:bg-emerald-600 transition w-36 mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Add Recipe
            </button>
          </Link>
        </div>

        <SearchBar setRecipie={setRecipies}/>

        <p className='text-3xl text-white font-bold mt-10'>Recipes</p>


        <div className="flex flex-wrap  gap-8  mt-10 sm:justify-center md:justify-center lg:justify-start">
          {Recipies.map((recipie, index) => (
            <RecipieCard key={index} recipie={recipie} />
          ))}
        </div>
      </Stack>
    </motion.div>
  );
};

export default Feed;
