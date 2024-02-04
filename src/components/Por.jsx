import React from 'react'
import casino from '../assets/images/night.png'


const Por = () => {
    return (
        <div className='max-lg:bg-white md:py-20 py-10 relative z-20'>
            <div className='max-w-[1140px] px-3 mx-auto lg:py-32'>
                <div className='flex flex-wrap flex-row -mx-3 lg:py-32'>
                    <div className='lg:w-1/2 w-full px-3 flex justify-center items-center lg:items-start flex-col max-lg:text-center' data-aos="zoom-in-right">
                        <h2 className='font-Anton font-normal lg:text-5xl md:text-[40px] text-[38px]'>Por qué elegirnos</h2>
                        <p className='font-Inter font-medium text-[16px] text-[#00141B] max-w-[526px] max-lg:text-center pt-4'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <div className='flex max-lg:justify-center  '>
                            <button className=' font-Inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-7 relative after:absolute after:content-[url(./assets/images/gline.webp)] after:top-[31px] after:left-[-6px] bg-gradient  hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] duration-500 transition-all hover:scale-105 text-[#00141B]'>Aprende más</button>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 pt-12 lg:pt-0' data-aos="zoom-in-left">
                        <img src={casino} alt="casino" className=' w-full rounded-[16px]'  />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Por