import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icon/filic.png';
import { AiOutlineHome } from "react-icons/ai";
const Navbar = () => {



    
    return (
         <div>

            {/* <!-- Section: Design Block --> */}
            <section class="mb-0">
                <nav class="navbar navbar-expand-lg bg-[#1faa00] lg:px-28 shadow-md py-1 relative flex items-center w-full justify-between">
                    <div class="px-6 w-full flex flex-wrap items-center justify-between">
                        <div class="flex items-center">
                            <button
                                class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-white hover:text-white focus:text-white transition-shadow duration-150 ease-in-out mr-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    class="w-5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                    ></path>
                                </svg>
                            </button>
                            
                <img className='w-12  shadow-lg bg-white rounded-full p-1 hidden lg:block' src={logo} />
                <a class="btn btn-ghost normal-case text-md lg:px-3 text-white font-bold">FAREAST ISLAMI LIFE</a>
                        </div>
                        <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                            <ul class="navbar-nav mr-auto lg:flex lg:flex-row lg:px-40">

                                <li class="nav-item flex text-center bg-[#087f23] pl-3  pr-0 mt-1 p-1.5 mr-3 rounded hover:bg-[#005005]">
                                 <AiOutlineHome className='mt-1 text-white mr-1' /> <NavLink className='text-white pr-3 font-weight-bold' to='/' activeStyle={{color: "#005005",textDecoration:"none"}}>Home</NavLink>
                                    {/* <a class="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white focus:text-white transition duration-150 ease-in-out" href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a> */}
                                </li>
                                <li class="nav-item flex  text-center bg-[#087f23] pl-3 pr-0 p-1.5 mt-1 mr-3 rounded hover:bg-[#005005]">
                                      <NavLink className='text-white pr-3' to='/about'>About us</NavLink>
                                    {/* <a class="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white focus:text-white transition duration-150 ease-in-out" href="/about" data-mdb-ripple="true" data-mdb-ripple-color="light">About Us</a> */}
                                </li>
                                <li class="nav-item mb-2 lg:mb-0 flex text-center bg-[#087f23] pl-3 mt-1 pr-0 p-1.5 mr-3 rounded hover:bg-[#005005]">
                                <NavLink className='text-white pr-3' to='/contact'>Contact us</NavLink>

                                    {/* <a class="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white focus:text-white transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Contact Us</a> */}
                                </li>
                            </ul>
                        </div>
                        {/* <div class="flex items-center lg:ml-auto">
                            <button type="button" class="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
                        </div> */}
                    </div>
                </nav>

            </section>
            {/* <!-- Section: Design Block --> */}

        </div>
    );
};

export default Navbar;