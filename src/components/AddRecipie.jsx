import React, { useState } from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipie = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Procedure, setProcedure] = useState('');
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/addrecipie',
        { Title, Description, Ingredients, Procedure },
        { withCredentials: true }
      );
      if (res.status === 201) {
        setStatus(true);
        setTimeout(() => navigate('/dashboard'), 2000);
      }
    } catch (error) {
      console.error('Error submitting recipe:', error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-white font-bold text-4xl">Post Recipes</h1>
        <form className="mt-2 p-4" onSubmit={handleSubmit}>
          {status && <p className="text-green-400 mb-2">Recipe successfully posted!</p>}
          <Typography variant="h6" className="text-emerald-300 font-bold">Title</Typography>
          <input
            type="text"
            className="block text-white w-full p-3 border-2 rounded-md mb-5"
            placeholder="Spaghetti"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Typography variant="h6" className="text-emerald-300 font-bold mt-5">Description</Typography>
          <textarea
            className="block text-white w-full p-3 border-2 rounded-md mb-5 h-[120px] resize-none"
            placeholder="Describe the dish..."
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Typography variant="h6" className="text-emerald-300 font-bold">Recipe Ingredients</Typography>
          <textarea
            className="block text-white w-full p-4 border-2 rounded-md h-15 resize-none mb-10"
            maxLength={700}
            placeholder="List the ingredients..."
            value={Ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <Typography variant="h6" className="text-emerald-300 font-bold">Recipe Procedure</Typography>
          <textarea
            className="block text-white w-full p-3 border-2 rounded-md h-100 resize-none mb-10"
            maxLength={1000}
            placeholder="Step-by-step procedure..."
            value={Procedure}
            onChange={(e) => setProcedure(e.target.value)}
          />

          <button type="submit" disabled={!Title || !Description || !Ingredients || !Procedure} className="bg-emerald-500 p-2 rounded-md w-28 cursor-pointer">Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipie;
