import React from 'react'
import {Route, useNavigate} from 'react-router-dom';
import './Job.css'
export default function Job() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/jobsearch');
        window.location.reload();
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col">

                    <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                            Nearby Job Avaiable:
                        </h1>
                        
                        <button className='Job' onClick={handleClick} > JOB SEARCH/ नौकरी की खोज</button>
                        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Search For Nearby job avaiable based on
                            your preference and price factor <br /> अपनी पसंद और मूल्य कारक के आधार पर निकटवर्ती नौकरियों की
                            खोज करें </p>
                    </div>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">

                        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Construction Worker</h2>
                        <p class="text-base leading-relaxed mt-2">Need a Construction Worker for construction of boundries
                            of the terrace which will take upto two to three days <br /> Basis: Contract <br /> Proposed Wage:
                            1000 per day</p>
                        <a class="text-red-500 inline-flex items-center mt-3">Make an Offer
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">

                        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Street Food Vendor</h2>
                        <p class="text-base leading-relaxed mt-2">Need Street Food Vendor for Reception of Marriage of
                            Chinese Fast Food,Pani Pur, Ice Cream etc <br /> Date: 20-04-2022 <br /> Basis:Contract <br />
                            Proposed Wage: Based on Consumption</p>
                        <a class="text-red-500 inline-flex items-center mt-3">Make an Offer
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">

                        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Plumber</h2>
                        <p class="text-base leading-relaxed mt-2">Need a plumber for a day for repairment of leakage from
                            the ceiling <br /> Date: Before 27-04-2023<br /> Basis: Daily Wage</p>
                        <a class="text-red-500 inline-flex items-center mt-3">Make an Offer
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-24 h-full bg-red-500"></div>
            </div>

        </section>
    )
}
