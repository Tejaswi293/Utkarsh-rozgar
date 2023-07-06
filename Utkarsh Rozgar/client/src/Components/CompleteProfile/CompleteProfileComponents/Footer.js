import React from 'react'
import logo from '..//CompleteProfileImages/logo.png'
import './Footer.css'
// import social media icons.
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
export default function Footer(props) {
    return (
        <footer class="text-gray-600 body-font">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-24 h-full bg-red-500"></div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src={logo} style={{ width: '100px' }} />
                        <span class="ml-3 text-xl">{props.title}</span>
                    </a>
                    <br/>
                    <br/>
                    <p class="mt-2 text-sm text-gray-500">A Step Towards providing equal employment to everyone</p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">GOVERMENT OF INDIA</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Ministry of Labour and Employment</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Employees' Provident Fund Organization (EPFO):</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Employees' State Insurance Corporation (ESIC)</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">National Career Service (NCS)</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">DAY-NULM</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Self-Employment Program (SEP)</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800"> EST&P</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">SM&ID</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Capacity Building and Training (CB&T)</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MoHUA</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Department of <br />Urban Development</a>
                            </li>


                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PM SVANidhi</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">About Us</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800">Scheme</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 Utkarsh Rozgar
                    </p>
                    {/* social media */}
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <FaFacebookF />
                        </a>
                        <a class="ml-3 text-gray-500">
                            <FaTwitter />
                        </a>
                        <a class="ml-3 text-gray-500">
                            <FaInstagram />
                        </a>
                        <a class="ml-3 text-gray-500">
                            <FaYoutube />
                        </a>
                        <a class="ml-3 text-gray-500">
                            <FaLinkedin />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
