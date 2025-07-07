import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import MyRecipieCard from './MyRecipieCard'

const MyRecipie = () => {
    const [yourRecipie, setRecipie] = useState([]);
    useEffect(()=>{
        const fetch = async ()=>{
            const data = await axios.get('/myrecipies',{withCredentials:true})
            if(data){
                setRecipie(data.data);
                console.log(data.data)
            }
        }
        fetch();
    },[])
  return (
    <div>
        <h3 className='text-white font-bold mt-5 text-4xl   mb-4'>
          Your Recipies 
          </h3>
      <div className='flex flex-wrap gap-10 justify-center '>
        {yourRecipie.length > 0 ? (
          yourRecipie.map((recipie, i) =>  <div className="w-[300px] flex"> <MyRecipieCard key={i} recipie={recipie} /></div>)
        ) : (
          <p className='text-white'>No results found.</p>
        )}
      </div>
    </div>
  )
}

export default MyRecipie
