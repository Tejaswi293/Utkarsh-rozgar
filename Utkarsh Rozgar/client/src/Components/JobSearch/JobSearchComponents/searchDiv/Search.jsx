import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRupeeSign } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]' >

      <form action="">

        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

          <div className='flex gap-2 items-center '>
            <AiOutlineSearch className='text-[25px] icon ' />
            <input type="text" className='bg-transparent text-red-500 focus:outline-none w-[100%]' placeholder='Jobs Here/यहाँ नौकरी खोजे...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>

          <div className='flex gap-2 items-center '>
            <FaRupeeSign className='text-[25px] icon ' />
            <input type="text" className='bg-transparent text-red-500 focus:outline-none w-[100%]' placeholder='Search by Money... ' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>

          <div className='flex gap-2 items-center '>
            <CiLocationOn className='text-[25px] icon ' />
            <input type="text" className='bg-transparent text-red-500 focus:outline-none w-[100%]' placeholder='by location/स्थान के आधार...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>



          <button className='bg-redColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-red-300 ' >Search</button>


        </div>

      </form>

      <div className='secDiv flex items-center gap-10 justify-center' >


        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className='text-[#808080] font-semibold'> Sort By: </label>
          <select name="" id="relevance" className='bg-redColor text-white rounded-[3px] px-4 py-1' >
            <option value="">Default</option>
            <option className='bg-white text-black' value="">Nearby</option>
            <option className='bg-white text-black' value="">Money</option>
            <option className='bg-white text-black' value="">No of Days</option>
          </select>
        </div>


        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="Type" className='text-[#808080] font-semibold'> Type: </label>
          <select name="" id="relevance" className='bg-redColor text-white rounded-[3px] px-4 py-1' >
            <option value="">Contractual</option>
            <option className='bg-white text-black' value="">Daily Wage</option>
            <option className='bg-white text-black' value="">Full-Time</option>
            <option className='bg-white text-black' value="">Part-Time</option>
          </select>
        </div>



        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="Level" className='text-[#808080] font-semibold'>Skill Level: </label>
          <select name="" id="relevance" className='bg-redColor text-white rounded-[3px] px-4 py-1' >
            <option value="">Professional</option>
            <option className='bg-white text-black' value="">Intermediate</option>
            <option className='bg-white text-black' value="">Beginner</option>
          </select>
        </div>

        <span className='text-[#a1a1a1 ] cursor-pointer'  >Clear All</span>

      </div>

    </div>
  )
}

export default Search
