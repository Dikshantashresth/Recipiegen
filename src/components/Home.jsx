import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="h-screen w-full bg-zinc-900 flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white text-5xl font-bold mb-6">Welcome to RecipeHub 🍜</h1>
        <p className="text-gray-300 text-lg mb-10">Your place to share and discover delicious recipes.</p>

        <div className="flex justify-center gap-6">
          <Link to="/register">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" color="success" className="w-32 font-bold">
                Register
              </Button>
            </motion.div>
          </Link>

          <Link to="/login">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outlined" color="inherit" className="w-32 font-bold text-white border-white">
                Login
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
