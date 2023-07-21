import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../WorkerDashboardImages/logo.png'
export default function Header(props) {
    const navigate = useNavigate();
    
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} style={{width:"15vh"}} />
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover" href='/workerhistory'>Work history</a>
                    <br/>
                    <a class="mr-5 hover:text-gray-900">Nearby Work</a>
                    <br/>
                    <a class="mr-5 hover:text-gray-900">Help</a>
                </nav>
            </div>
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-red-500"></div>
        </div>
        </header>
     
    )
}
