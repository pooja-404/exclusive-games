import React from 'react'
import img1 from '../assets/images/bulb.webp'
import img2 from '../assets/images/fan.webp'
import img3 from '../assets/images/sun.webp'
import arrow1 from '../assets/images/line1.webp'
import arrow2 from '../assets/images/line2.webp'
import Slots from './Slots'


const Marca = () => {
    return (
        <div className="lg:bg-[url(./assets/images/whitebg1.png)] bg-size bg-center bg-no-repeat lg:py-[243px] sm:py-20 py-10 ">
            <div className='max-lg:bg-white '>
                <div className="max-w-[1140px] px-3 mx-auto">
                    <h2 className=" font-Anton text-[#00141B] lg:text-5xl md:text-[40px] text-[38px] text-center pt-10 md:mb-[60px]">
                        Nuestros Atributos de Marca
                    </h2>
                    <div className="flex flex-wrap flex-row -mx-3 relative pt-8 justify-center">
                        <img src={arrow1} alt="a" className="hidden lg:block absolute left-[19%] top-[14%]" />
                        <img src={arrow2} alt="a" className="hidden lg:block absolute right-[19%] top-[33%]" />
                        <div className="lg:w-1/3 sm:w-1/2 w-full px-3  flex lg:justify-start justify-center" data-aos="zoom-in-left">
                            <div className="max-w-[263px] flex flex-col items-center">
                                <div className='w-[100px] h-[100px] rounded-[73px] bg-[#7AF57A14] flex justify-center items-center'>
                                    <img src={img1} alt="img1" />
                                </div>
                                <h3 className=" font-Anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5 pt-5">
                                    Inteligencia
                                </h3>
                                <p className="text-center font-Inter text-base  font-medium leading-[25.6px] text-[#00141B]">
                                    Comprendemos a la perfección los gustos de las personas y el
                                    mundo del gaming.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center pt-7 sm:pt-0" data-aos="zoom-out">
                            <div className="max-w-[235px] flex flex-col items-center">
                                <div className='w-[100px] h-[100px] rounded-[73px] bg-[#7AF57A14] flex justify-center items-center'>
                                    <img src={img2} alt="img1" />
                                </div>
                                <h3 className="font-Anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5 pt-5">Proactividad</h3>
                                <p className="text-center font-Inter text-base  font-medium leading-[25.6px] text-[#00141B]">Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 w-full px-3 flex lg:justify-end pt-7 lg:pt-0  justify-center" data-aos="zoom-in-right">
                            <div className="max-w-[244px] flex flex-col items-center">
                                <div className='w-[100px] h-[100px] rounded-[73px] bg-[#7AF57A14] flex justify-center items-center'>
                                    <img src={img3} alt="img1" />
                                </div>
                                <h3 className="font-Anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5 pt-5">Innovación</h3>
                                <p className="text-center font-Inter text-base  font-medium leading-[25.6px] text-[#00141B]">Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                            </div>
                        </div>
                    </div>
                    <Slots />
                </div>
            </div>
        </div>
    )
}

export default Marca