import React from 'react'
import imgg from '../assets/images/777.png'
import bulb from '../assets/images/gbulb.png'
import starts from '../assets/images/stars.png'
import ruppee from '../assets/images/rupees.png'
import norellipse from '../assets/images/nosellipse.webp'
import norellipse2 from '../assets/images/nosellipse2.webp'


const Triple = () => {
    return (
        <>
            <div className='bg-[#00141b] pt-9 relative z-10'>
                <div className='max-w-[1140px] px-3 mx-auto py-12'>
                    <div className='flex flex-wrap flex-row -mx-3 justify-center'>
                        <div className='lg:w-1/2 w-full px-3' data-aos="fade-right">
                            <img src={imgg} alt="777" className='rounded-[16px] mt-2 w-full lg:w-[96%]' />
                        </div>
                        <div className='lg:w-1/2 w-full px-3 max-lg:flex justify-center items-center flex-col pt-9 lg:pt-0  '>
                            <h2 className='lg:text-5xl md:text-[40px] text-[38px] font-normal font-Anton text-white pb-5 max-lg:text-center' data-aos="fade-left">Más razones para elegirnos</h2>
                            <div className='lg:max-w-[374px]  h-[116px] rounded-[16px] border-green-200  mt-6 border-[0.75px] border-solid bg-[#051D23]  p-[19px_16px] min-[376px]:p-[24px_56px]  gap-[37px]'data-aos="fade-down">
                                <div className='flex items-center gap-10 max-lg:px-4'>
                                    <div className='w-[68px] h-[68px] rounded-[73px] bg-[#7AF57A14] flex justify-center items-center'>
                                        <img src={bulb} alt="bulb" />
                                    </div>
                                    <div>
                                        <h3 className='text-white font-Anton text-[32px] font-normal'>200</h3>
                                        <p className='font-Inter font-medium text-[16px] text-white text-nowrap '>Páginas creadas</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:max-w-[374px]  h-[116px] rounded-[16px] border-green-200 mt-6  border-[0.75px] border-solid bg-[#051D23]  p-[19px_16px] min-[376px]:p-[24px_56px]  gap-[37px]'data-aos="fade-left">
                                <div className='flex items-center gap-10'>
                                    <div className='w-[68px] h-[68px] p-3 rounded-[73px] bg-[#7AF57A14] flex justify-center items-center'>
                                        <img src={starts} alt="bulb" />
                                    </div>
                                    <div>
                                        <h3 className='text-white font-Anton text-[32px] font-normal'>98%</h3>
                                        <p className='font-Inter font-medium text-[16px] text-white text-nowrap'>Clientes Satisfechas</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:max-w-[374px]  h-[116px] rounded-[16px] border-green-200  mt-6 border-[0.75px] border-solid bg-[#051D23]  p-[19px_16px] min-[376px]:p-[24px_56px]  gap-[37px]'data-aos="fade-up">
                                <div className='flex items-center gap-10 max-lg:px-1'>
                                    <div className='w-[68px] h-[68px]  rounded-[73px] bg-[#7AF57A14] flex justify-center items-center'>
                                        <img src={ruppee} alt="bulb" />
                                    </div>
                                    <div>
                                        <h3 className='text-white font-Anton text-[32px] font-normal'>200</h3>
                                        <p className='font-Inter font-medium text-[16px] text-white text-nowrap'>Divisas Disponibles</p>
                                    </div>

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
