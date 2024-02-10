import React from 'react'
import imgg from '../assets/images/777.webp'
import bulb from '../assets/images/gbulb.webp'
import starts from '../assets/images/stars.webp'
import ruppee from '../assets/images/rupees.webp'
import norellipse from '../assets/images/nosellipse.webp'
import norellipse2 from '../assets/images/nosellipse2.webp'


const Triple = () => {
    return (
        <>
            <div className='bg-[#00141b] pt-9 relative z-10' id='triple'>
                <div className='max-w-[1140px] px-3 mx-auto max-md:pb-10 lg:py-12'>
                    <div className='flex flex-wrap flex-row -mx-3 justify-center'>
                        <div className='lg:w-1/2 w-full px-3' data-aos="fade-right">
                            <img src={imgg} alt="777" className='rounded-[16px] mt-2 w-full  h-full lg:w-[96%] object-cover' />
                        </div>
                        <div className='lg:w-1/2 w-full  px-3 max-lg:flex justify-center items-center flex-col pt-9 lg:pt-0  '>
                            <h2 className='lg:text-5xl md:text-[40px] text-[38px] font-normal font-Anton text-white md:pb-5  max-lg:text-center' data-aos="fade-left">Más razones para elegirnos</h2>
                            <div className=' mt-6 lg:mt-9 bg-people p-[1px] pl-[1px] !duration-500  hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] w-full rounded-[16px] max-w-[374px]' data-aos="fade-left">
                                <div className=" pl-[15px] sm:pl-[56px] pr-[20px] bg-[#051D23] py-6 flex items-center gap-[37px] rounded-[16px]">
                                    <img className='w-[68px] h-[68px]' src={bulb} alt="bulb" />
                                    <p className='max-w-[227px] font-Inter font-medium leading-[25px] text-[14px] sm:text-[16px] text-white'><span className=' font-Anton text-[25px] sm:text-[32px] leading-[41px] font-normal'>200</span> <br /> Páginas creadas</p>
                                </div>
                            </div>
                            <div className=' mt-6 bg-people p-[1px] pl-[1px] !duration-500  hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] w-full rounded-[16px] max-w-[374px]' data-aos="fade-left">
                                <div className=" pl-[15px] sm:pl-[56px] pr-[20px] bg-[#051D23] py-6 flex items-center gap-[37px] rounded-[16px]">
                                    <img className='w-[68px] h-[68px]' src={starts} alt="bulb" />
                                    <p className='max-w-[227px] font-Inter font-medium leading-[25px] text-[14px] sm:text-[16px] text-white'><span className=' font-Anton text-[25px] sm:text-[32px] leading-[41px] font-normal'>98% </span><br />Clientes Satisfechas</p>
                                </div>
                            </div>
                            <div className=' mt-6 bg-people p-[1px] pl-[1px] !duration-500  hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] w-full rounded-[16px] max-w-[374px]' data-aos="fade-left">
                                <div className=" pl-[15px] sm:pl-[56px] pr-[20px] bg-[#051D23] py-6 flex items-center gap-[37px] rounded-[16px]">
                                    <img className='w-[68px] h-[68px]' src={ruppee} alt="bulb" />
                                    <p className='max-w-[227px] font-Inter font-medium leading-[25px] text-[14px] sm:text-[16px] text-white'><span className=' font-Anton text-[25px] sm:text-[32px] leading-[41px] font-normal'>200</span> <br />Divisas Disponibles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={norellipse} alt="poker" className='absolute right-0 top-[-25%] -z-10' />
                <img src={norellipse2} alt="poker" className='absolute left-0 bottom-[12%] -z-10' />
            </div >
        </>
    )
}

export default Triple
