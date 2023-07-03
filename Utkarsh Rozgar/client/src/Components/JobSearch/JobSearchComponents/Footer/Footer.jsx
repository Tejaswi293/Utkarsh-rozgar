import React from 'react'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-redColor rounded-[10px] gap-8 margin-10 grid grid-cols-5 m-auto items-center justify-center' >

      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-[#FFFFFF] pb-[1.5rem]">
            <strong>UTKARSH</strong>ROZGAR<strong> <br/>/उत्कर्ष</strong> रोजगार
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-90 text-[24px] leading-7' >
          "सभी के लिए सशक्तिकरण, अवसर और प्रगति।"
        </p>
      </div>

      <div className='grid ' >
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          DAY-NULM
        </span>
        <div className='grid gap-3' >

          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>About Us</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>Home</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>PM-SVAnidhi</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>Other schemes</li>


        </div>
      </div>


      <div className='grid ' >
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          GOVERMENT OF INDIA
        </span>
        <div className='grid gap-3' >

          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>MohUA</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>ULB's</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>TULIP</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>Apply For Volunteer</li>



        </div>
      </div>


      <div className='grid ' >
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
        HELPLINE
        </span>
        <div className='grid gap-3' >

          <li className='text-white  opacity-[0.9] hover:opacity-[1] '> Contact Us</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>Join Us</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>Call-Us</li>
          <li className='text-white  opacity-[0.9] hover:opacity-[1] '>Reach Us</li>


        </div>
      </div>

    </div>
  )
}

export default Footer
