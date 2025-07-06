import React from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import { UserContextProvider } from './context/userContext'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import AddRecipie from './components/AddRecipie'
import Settings from './components/Settings'
import Logout from './components/logout'
import axios from 'axios'
import Search from './components/Search'
import Feed from './components/Feed'
import RecipieCard from './components/RecipieCard'
import RecipieDetails from './components/RecipieDetails'
import Home from './components/Home'
const App = () => {
  axios.defaults.withCredentials = true;
  return (
   <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />}>
           
            <Route path="settings" element={<Settings />} />
            <Route index element={<Feed />} />
            <Route path="search" element={<Search />} />
            <Route path="addrecipie" element={<AddRecipie />} />
            <Route path="recipiedetail/:id" element={<RecipieDetails/>}/>
          </Route>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </UserContextProvider>
   </BrowserRouter>
  )
}

export default App
