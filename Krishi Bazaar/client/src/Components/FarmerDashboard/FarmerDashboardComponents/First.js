import React from 'react'
import maxresdefault from '../FarmerDashboardImages/maxresdefault.jpg'

export default function First() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Empowerment, opportunity,
                        and progress for all.
                        <br class="hidden lg:inline-block"/>"सभी के लिए सशक्तिकरण, अवसर और प्रगति।"
                    </h1>
                    <p class="mb-8 leading-relaxed">"Empowering India's workforce - one job at a time. Discover your
                        potential, unlock new opportunities, and achieve your dreams with our comprehensive employment
                        services. Join us in building a more inclusive and prosperous India for all.". <br/> "भारत की
                        श्रमशक्ति को सशक्त बनाना - एक नौकरी की मदद से। हमारी व्यापक रोजगार सेवाओं से अपनी संभावनाओं को
                        खोजें, नई अवसरों को खोलें और अपने सपनों को पूरा करें। सभी के लिए एक सम्मिलित और समृद्ध भारत के
                        निर्माण में हमारे साथ शामिल हों।"</p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-blue bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"> For Contract/ठेके के लिए आवेदन करें</button>
                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Daily
                            Wage Jobs</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={maxresdefault}/>
                </div>
            </div>
            
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-24 h-full bg-red-500"></div>
            </div>
        </section>
    )
}
