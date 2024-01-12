/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FaAngleDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
const Navbar = () => {
   

 
    return (
        <div>
            <div className="navbar bg-amber-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-100 rounded-box ">
                            <li><button>Filter by name <IoIosArrowUp /></button></li>
                            <li><button>Filter by name <FaAngleDown /></button></li>
                            {/* search form */}
                            <form>
                                <div className="flex items-center">
                                    <input type="text" placeholder="venusaur" className="input input-bordered w-auto bg-amber-50" name='search' />
                                    <button className='mr-3 ml-2 text-2xl'> <FaSearch /></button>
                                </div>
                            </form>

                        </ul>

                    </div>
                    <a href='/'><img className="btn btn-ghost rounded" src={logo} alt="logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><button>Filter by name <IoIosArrowUp /></button></li>
                        <li><button>Filter by name <FaAngleDown /></button></li>
                    </ul>
                    {/* search form */}
                    <form>
                        <div className="flex items-center">
                            <input type="text" placeholder="venusaur" className="input input-bordered w-24 md:w-auto bg-amber-50" name='search' />
                            <button className='mr-3 ml-2 text-2xl'> <FaSearch /></button>
                        </div>

                    </form>



                </div>
                <div className="navbar-end">

                    <div className='relative mr-4'>
                        <FaShoppingCart className='text-3xl' />
                        <span className='absolute -top-3 -right-3 text-white bg-orange-600 px-2 rounded-full'>{0}</span>

                    </div>
                    <button className="myBtn mx-2">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;