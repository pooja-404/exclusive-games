import React from 'react'
import poker from '../assets/images/poker.webp'
import aviator from '../assets/images/aviater.webp'
import missionellipse from '../assets/images/missinellipse.webp'
import missionellipse2 from '../assets/images/missisinellipse2.webp'


const Mission = () => {
    return (
        <div className='relative z-10'>
            <div className='relative md:mt-16 mt-9  overflow-x-clip'>
                <div className='max-w-[1140px] mx-auto px-3 md:pb-16 '>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className='md:w-1/2 w-full px-3 flex items-center md:items-start justify-center md:justify-start flex-col'  data-aos="fade-right">
                            <img src={poker} alt="poker" className='rounded-[16px] w-[93%]' />
                            <h2 className='text-white lg:text-5xl md:text-[40px] text-[38px] font-normal font-Anton pt-8 hover:text-white duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]'>Nuestra Visión</h2>
                            <p className='font-Inter font-medium text-[16px] text-[#ccd0d1] max-w-[444px] text-center md:text-start'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <p className='font-Inter text-[16px] font-bold text-[#7AF57A] pt-5 cursor-pointer hover:text-white hover:shadow-[7px_9px_15px_0px_#00000033]'>Aprende más {"-->"}</p>
                        </div>
                        <div className='md:w-1/2 w-full px-3 flex items-center md:items-start justify-center md:justify-start flex-col' data-aos="fade-left">
                            <img className='md:mt-16 mt-9 block md:hidden rounded-[16px] w-[93%] ' src={aviator} alt="aviator"  />
                            <h2 className='text-white lg:text-5xl md:text-[40px] text-[38px] font-normal font-Anton pt-8 md:pt-0 hover:text-white duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]  '>Nuestra Misión</h2>
                            <p className='font-Inter font-medium text-[16px] text-[#ccd0d1] max-w-[444px] pt-2 text-center md:text-start'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                            <p className='font-Inter text-[16px] font-bold text-[#7AF57A] pt-5 cursor-pointer hover:text-white duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]'>Aprende más {"-->"}</p>
                            <img className='md:mt-16 mt-9 hidden md:block rounded-[16px] w-[93%] ' src={aviator} alt="aviator"  />
                        </div>
                    </div>
                </div>
            </div>
            <img src={missionellipse} alt="poker" className='absolute right-0 top-[15%] -z-10' />
            <img src={missionellipse2} alt="poker" className='absolute left-0 bottom-0 -z-10' />
        </div>
    )
}

export default Mission
