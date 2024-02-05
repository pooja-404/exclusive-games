import React from 'react'
import jackpot from '../assets/images/jackpot.webp'
import double from '../assets/images/double.webp'
import vevoellipse2 from '../assets/images/vevoellipe2.webp'
import jellipse from '../assets/images/jellipse.webp'

function Jackpot() {
  return (
    <div className='relative z-10'>
      <div className='max-w-[1140px] mx-auto px-3 lg:pt-24 '>
        <div className='flex flex-row flex-wrap -mx-3'>
          <div className='lg:w-1/2 w-full px-3 ' data-aos="fade-right">
            <img src={jackpot} alt="logo" className='w-full max-lg:-w-[97%] h-full rounded-[16px]' />
          </div>
          <div className='lg:w-1/2 w-full px-3 flex justify-center flex-col pt-7 lg:pt-0' data-aos="fade-left">
            <h2 className='font-Anton font-normal lg:text-5xl md:text-[40px] sm:text-[38px] text-[30px] text-[#FFFF] leading-[57px] max-lg:text-center'>Potenciando sus elecciones</h2>
            <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da] pt-5 max-lg:text-center'>Con Exclusive Game lo mejor está de tu lado.</p>
            <div className='flex gap-3 items-center pt-6 max-lg:justify-center'>
              <img src={double} alt="double" />
              <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da]'>Tecnología HTML5</p>
            </div>
            <div className='flex gap-3 items-center max-lg:justify-center pt-5'>
              <img src={double} alt="double" />
              <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da]'>Versión PC y móvil</p>
            </div>
            <div className='flex gap-3 items-center pt-5 max-lg:justify-center max-lg:text-center'>
              <img src={double} alt="double" />
              <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da] max-lg:text-center'>Control de RTP (controlás qué porcentaje pagar)</p>
            </div>
            <div className='flex gap-3 items-center pt-5 max-lg:justify-center max-lg:text-center'>
              <img src={double} alt="double" />
              <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da] lg: max-w-[380px] max-lg:text-center'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
            </div>
            <div className='flex gap-3 items-center pt-5 max-lg:justify-center max-lg:text-center'>
              <img src={double} alt="double" />
              <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da] max-lg:text-center'>Aplicación para android y windows de regalo.</p>
            </div>
            <p className='font-Inter font-medium text-base leading-[25px] text-[#d2d8da] pt-5 max-lg:text-center'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
          </div>
        </div>
      </div>
      <img src={vevoellipse2} alt="poker" className='absolute left-0 bottom-[-22%] -z-10' />
      <img src={jellipse} alt="poker" className='absolute left-[41%] bottom-[-22%] -z-10' />
    </div>
  )
}
export default Jackpot
