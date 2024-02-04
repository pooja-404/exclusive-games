import React from 'react'
import double from '../assets/images/double.png'
import gplay from '../assets/images/gplay.png'
import card1 from '../assets/images/heartcard.png'
import card2 from '../assets/images/heartcard2.png'
import dise from '../assets/images/dise.png'




function Luxury() {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-3 pb-16 '>
                <div className="w-full px-5 border-[0.5px] bg-[url(./assets/images/luxurybg.png)] bg-100 bg-no-repeat h-full border-[#849294] bg-[#051D23] rounded-[16px] py-[45px] flex items-center flex-col relative">
                    <div className='max-w-[419px] z-10'>
                        <h4 className='text-white text-[32px] font-Anton font-normal leading-[41px] text-center'data-aos="zoom-out-down">Luxury</h4>
                        <p className='font-Inter font-medium text-[16px] leading-[25px] text-white pt-4 text-center !opacity-80'data-aos="zoom-out-down">lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className='text-white font-Anton font-normal text-[48px] leading-[57px] text-center pt-8 pb-4'data-aos="zoom-out-down">$9000</h2>
                        <div className="flex items-start gap-2"data-aos="zoom-out-up">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white  text-center opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3"data-aos="zoom-out-up">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3"data-aos="zoom-out-up">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3"data-aos="zoom-out-up">
                            <img src={double} alt="double" />
                            <div className='text-center w-full'>
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 pt-3 pb-9"data-aos="zoom-out-up">
                            <img src={double} alt="double" />
                            <div className='text-center w-full'>
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                        </div>
                        <div className='flex justify-center' data-aos="zoom-out-up">
                            <button className='bg-gradient  hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] duration-500 transition-all hover:scale-125 text-[#00141B]  font-Inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-3 relative after:absolute after:content-[url(./assets/images/gline.webp)] after:top-[31px] after:left-[-6px]'>Comprar ahora</button>
                        </div>
                    </div>
                    <img src={gplay} alt="double" className='absolute lg:left-[19%] lg:top-[17%] left-[2%] top-[2%] max-lg:w-[20%]'/>
                    <img src={card1} alt="double" className='absolute lg:right-[11%] lg:top-[17%] right-[2%] top-[2%] max-lg:w-[20%] '/>
                    <img src={card2} alt="double" className='absolute lg:left-[11%] lg:bottom-[14%] left-[2%] bottom-[2%] max-lg:w-[20%]'/>
                    <img src={dise} alt="double" className='absolute lg:right-[18%] lg:bottom-[17%] right-[2%] bottom-[2%] max-lg:w-[20%]'/>
                </div>
            </div>
        </div>
    )
}
export default Luxury
