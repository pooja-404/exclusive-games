import React from 'react'
import platinum from '../assets/images/platinum.webp'
import double from '../assets/images/double.webp'
import pellipe from '../assets/images/pellipe.webp'
import pellipe2 from '../assets/images/pellipe2.webp'
import platinumellipse from '../assets/images/7ellipse.webp'

function Platinum() {
    return (
        <div className='relative z-10'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className="w-full border-[0.5px] px-[40px] py-[38px]  bg-[#051D23] border-[#849294] rounded-[16px]">
                    <div className="flex flex-wrap flex-row max-lg:flex-col-reverse -mx-3 justify-between items-center">
                        <div className='lg:w-5/12 w-full px-3 max-w-[364px] max-lg:flex max-lg:justify-center max-lg:flex-col'>
                            <h4 className='text-white text-[32px] font-Anton font-normal leading-[41px] max-lg:text-center max-md:pt-5'data-aos="fade-left">Platinum</h4>
                            <p className='font-Inter font-medium text-[16px] leading-[25px] text-white pt-4 !opacity-80 max-lg:text-center'data-aos="fade-left">Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h2 className='text-white font-Anton font-normal lg:text-[48px] md:text-4xl text-3xl leading-[57px] pt-8 pb-4 max-lg:text-center 'data-aos="fade-left">Consultar precio</h2>
                            <div className="flex items-start gap-2 max-lg:text-center max-lg:justify-center" data-aos="fade-left">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Personalizable</p>
                            </div>
                            <div className='max-lg:flex justify-center'data-aos="fade-left">
                                <button className='hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] group-hover:duration-500  hover:bg-gradient hover:border-[1px]  hover:border-[transparent]  text-white font-Inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] border-[1px] border-solid border-white rounded-[41px] mt-12 relative after:absolute after:content-[url(./assets/images/wline.webp)] duration-[0.5s] after:top-[31px] after:left-[-6px] '>Comprar ahora</button>
                            </div>
                        </div>
                        <div className="lg:w-7/12 w-full px-3 relative z-10" data-aos="fade-right">
                            <img className='w-full' src={platinum} alt="platinum" />
                            <img className='absolute right-0 bottom-[28%] -z-10 ' src={platinumellipse} alt="platinum" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={pellipe} alt="poker" className='absolute right-0 top-[-13%] -z-10' />
            <img src={pellipe2} alt="poker" className='absolute left-0 bottom-0 -z-10' />
        </div>
    )
}
export default Platinum
