import React from 'react'
import logo3 from '../image/logo3.png'
const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]' >
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[600px] block ' >
        Utkarsh Rozgar <br /> Providing Equal opportunity to All <br />सभी को समान अवसर प्रदान करना
      </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center' >
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]  ' >
          <div className='flex item-center gap-3 ' >
            <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center' >
              <img src={logo3} alt='Utakrsh Rozgar' className='w-[120%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px]'>
              Goverment Of India
            </span>
          </div>
          <p className='text-[20px] text-textColor opacity-[1] py-[1rem] font-semibold '>
            Utkarsh Rozgar: Goverment Initiative
          </p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]  ' >
          <div className='flex item-center gap-3 ' >
            {/* <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center' >
                  <img src={logo3} alt='Utakrsh Rozgar' className='w-[120%]'  />
                </div> */}

            <span className='font-semibold text-textColor text-[28px]'>
              "रोज़गार की खोज में आपका साथी,
              उत्कर्ष रोज़गार, आपका सपना साकार।"
            </span>
          </div>
          {/* <p className='text-[20px] text-textColor opacity-[1] py-[1rem] font-semibold '>
            Utkarsh Rozgar: Goverment Initiative
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Value
