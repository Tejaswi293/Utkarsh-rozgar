import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { BsPersonSquare } from 'react-icons/bs'
import { MdPermContactCalendar } from 'react-icons/md'





const Data=[
  {
    id:1,
    title:'Construction Site Worker',
    time:'7 Days',
    location:'Bariatu,Ranchi-Jharkhand',
    desc:' Need To complete Layering of Terrace. \n\n\n\n Workers Requried: 6 \n amount-Rs.300 per Day', 
    name:'Amrit Pandey',
    number:'9548661423',
  },
  {
    id:2,
    title:'Plumber',
    time:'Based on Speed of working',
    location:'Lalpur, Ranchi',
    desc:`Level: Expert \n\n Money-Rs.2000 \n\n Task: Fixing of Bathe Pipeline \n  `, 
    name:'Supriya Jha',
    number:'87233563298',
  },
  {
    id:3,
    title:'Chinese Food Vendor',
    time:'1 Days',
    location:'Samlong, Ranchi',
    desc:`Require 5 person at max. \n\n Money- Based on performance \n\n time: 8 hours `, 
    name:'Asish Deol',
    number:'6323859621',
  },
  {
    id:4,
    title:'Flower Seller',
    time:'3 Days',
    location:'Railway colony, Ranchi',
    desc:`Flowers: Rose, Lily and Marigold . \n\n Money- At max Rs 10 Depends on Flowers and quality  of it....\n\n time: 2 Days Function `, 
    name:'Akshay Rathore',
    number:'8520369741',
  },
  {
    id:5,
    title:'Home Cleaner',
    time:'2 Days',
    location:'Dhurwa, Ranchi',
    desc:`Require 3 person at max. \n\n Money- Rs.800 Per Person..... \n\n Task-Home Cleaning (2 Floor) `, 
    name:'Asish Deol',
    number:'6323859621',
  },
  {
    id:6,
    title:'Electrician',
    time:'2 Days',
    location:'Kokar, Ranchi',
    desc:`Skill level : Intermediate   . \n\n Money- Rs. 200 Per Hour    . \n\n Task: to Connect inverter with builiding Electric supply `, 
    name:'Anish Lal',
    number:'8987654231',
  },
  {
    id:7,
    title:'Cook For Family Function',
    time:'10 Hours',
    location:'Lower Chutia, Ranchi',
    desc:`Skill Level : intermediate . \n\n Money- Rs. 2000 \n\n time:12 Hours `, 
    name:'Prem Malhotra',
    number:'8752693201',
  },
  {
    id:8,
    title:'Maid',
    time:'8 Days',
    location:'SOP, Ranchi',
    desc:`Type: Contract. \n\n Money- Rs 2k Per Month \n\n time: Twice a day `, 
    name:'Yash Kumar',
    number:'9638527412',
  },
 
]


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">

      {
        Data.map(({id,title,time,location,desc,name,number})  => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-redColor
            shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:text-white">
    
              <span className='flex justify-between items-center gap-4'>
    
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white' >{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1' >
                  <BiTimeFive />{time}
                </span>
              </span>
              <h6 className='text=[#ccc]'  >{location}</h6>
    
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] hover:text-white '>
               {desc}
              </p>
    
              <div className='company flex items-center gap-2'>
                <BsPersonSquare className='w-[10%] gap-5  py=[1rem]  ' /> <div className='text-[13px] py=[1rem]' >{name}</div> <br />
                <MdPermContactCalendar className='w-[10%] gap-5   py=[1rem] ' /> <div className='text-[13px] py=[1rem]' > {number}</div>
              </div>
    
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-white bg-redColor  hover:bg-white hover:text-black'  >
                Apply Now
              </button>
    
            </div>
          )
        })
      }

      </div>
    </div>
  )
}

export default Jobs
