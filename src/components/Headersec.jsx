import React from 'react'

function Headersec() {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-3 md:mt-32 mt-12'>
                <h2 className='font-Anton sm:text-[65px] text-[50px] md:text-[72px] font-normal text-[#ffffff] mx-auto  lg:max-w-[505px] md:leading-[86px] text-center' data-aos="zoom-in" data-aos-delay="2000">Exclusive Games. Pasión por ganar</h2>
                <p className='font-Inter text-base font-medium text-[#ccd0d1] leading-[25px] lg:max-w-[727px]  text-center mx-auto pt-5' data-aos="zoom-in" data-aos-delay="2000">En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                <div className='flex justify-center'>
                    <button className='bg-gradient hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] duration-500 transition-all hover:scale-125 text-[#00141B] font-Inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-9 relative after:absolute after:content-[url(./assets/images/gline.webp)] after:top-[31px] after:left-[-6px] '>Empezar</button>
                </div>
            </div>
        </div>
    )
}

export default Headersec
