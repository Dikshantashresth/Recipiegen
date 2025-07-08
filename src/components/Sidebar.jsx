import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = ({ iscollapsed, handleCollapse }) => {

    return (
        <div className={`${iscollapsed ? 'w-0' : 'w-50'} fixed bg-zinc-800 text-white h-screen all-transition duration-200 ease-in-out`}>
            <div className="p-4 flex flex-col gap-4">
                <button className="bg-emerald-500 text-white rounded-md px-4 py-2 hover:bg-emerald-600 transition w-15" onClick={handleCollapse}>
                    {
                        !iscollapsed ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>


                    }
                </button>
                <div className={`sidebarcomponents flex flex-column gap-4 ${iscollapsed ? 'hidden' : 'flex'}`}>

                    <ul className="flex flex-col gap-2 py-3">
                        <li>
                            <div className="flex items-center gap-3 mb-3 text-white cursor-pointer hover:text-emerald-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                <span><Link to='/dashboard'>Home</Link></span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3 mb-3 text-white cursor-pointer hover:text-emerald-400 transition">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                                <span><Link to='search'>Search</Link></span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3 mb-3 text-white cursor-pointer hover:text-emerald-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <span><Link to='addrecipie'>Add Recipies</Link></span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-3 mb-3 text-white cursor-pointer hover:text-emerald-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>



                                <span ><Link to='myrecipie'>MyRecipies</Link></span>
                            </div>
                        </li>
                        

                        <li>
                            <div className="flex items-center gap-3 mb-3 text-white cursor-pointer hover:text-emerald-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>


                                <span className='text-red-500'><Link to='/logout'>Logout</Link></span>
                            </div>
                        </li>




                    </ul>

                </div>



            </div>

        </div>
    )
}

export default Sidebar
