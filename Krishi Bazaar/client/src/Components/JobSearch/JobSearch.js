import React from 'react'
import Footer from './JobSearchComponents/Footer/Footer'
import Jobs from './JobSearchComponents/JobDiv/Jobs'
import Search from './JobSearchComponents/searchDiv/Search'
import Value from './JobSearchComponents/ValueDiv/Value'
import './JobSearch.css'
const JobSearch = () => {
  return (
    <>
      <div className='w-[85%] m-auto bg-white ' >
        <Search />
        <Jobs />
        <Value />
        <Footer />
      </div>
    </>
  )
}

export default JobSearch
