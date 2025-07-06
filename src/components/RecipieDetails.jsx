import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const RecipieDetails = () => {
  const { id } = useParams();
  const [recipiedetail, setrecipiedetail] = useState(null);

  const fetchbyid = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recipie/${id}`, {
        withCredentials: true,
      });
      if (response) {
        setrecipiedetail(response.data);
    
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchbyid();
  }, [id]);

  
  const fadesideleft = {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };
  const fadesideright = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  };

  if (!recipiedetail) return <p className="text-white">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-white text-4xl mb-2 font-bold">
        {recipiedetail.recipiename}
      </h1>

      <motion.div {...fadesideleft} className="part bg-zinc-700 p-2 rounded">
        <p className="text-white text-2xl">
          <strong>Description:</strong>
        </p>
        <p className="text-white mt-2">{recipiedetail.desc}</p>
      </motion.div>

      <motion.div {...fadesideright} className="part bg-zinc-700 p-2 rounded mt-3">
        <p className="text-white text-2xl">
          <strong>Ingredients:</strong>
        </p>
        <p className="text-white mt-2">{recipiedetail.ingredients}</p>
      </motion.div>

      <motion.div {...fadesideleft} className="part bg-zinc-700 p-2 rounded mt-3">
        <p className="text-white text-2xl">
          <strong>Procedure:</strong>
        </p>
        <p className="text-white mt-2">{recipiedetail.process}</p>
      </motion.div>
    </motion.div>
  );
};

export default RecipieDetails;
