
import React from 'react'
import vivo1 from '../assets/images/vevo1.webp';
import vivo2 from '../assets/images/vevo2.webp';
import vivo3 from '../assets/images/vevo3.webp';
import vevoellipse from '../assets/images/vivoellip.webp'


const cards = [{
    bg: vivo1,
    animation: "flip-down"
},
{
    bg: vivo2,
    animation: "flip-down"
},
{
    bg: vivo3,
    animation: "flip-down"
},

]
const juegos = () => {
    const card = cards.map((cards, i) => (<div key={i} className="lg:w-1/3 md:w-2/4  w-full px-3 flex justify-center group duration-500 mb-6">
        <div className="lg:max-w-[364px] rounded-lg bg-[url(url(./assets/images/gline.webp)] w-full h-[265px] bg-no-repeat bg-center bg-cover  overflow-hidden relative" data-aos={`${cards.animation}`} data-aos-duration="1000" data-aos-offset="500"
            data-aos-easing="ease-in-sine" style={{ backgroundImage: `url(${cards.bg})` }}>
            <div className="absolute w-full  bg-[#000000B2] shadow-[7px_9px_15px_0px_#00000033] lg:max-w-[364px] h-[265px] flex justify-center top-[-100%] group-hover:top-0 left-0 items-center duration-500">
                <button className="text-white opacity-100 relative z-[2] border border-white rounded-full py-[13px] px-[46px] border-solid after:absolute after:left-[-3%]  after:bottom-[-30%] font-Inter font-bold text-base leading-[25.6px] after:content-[url(./assets/images/wline2.webp)] hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] group-hover:duration-500  hover:bg-gradient hover:border-[1px]  hover:border-[transparent] hover:scale-75">Reproducir ahora</button>  
            </div>
        </div>
    </div>))
    return (
        <div className="lg:pt-24 lg:pb-20 md:pb-10 pb-7 relative z-10 ">
            <div className='max-w-[1140px] mx-auto px-3 pt-7'>
                <h2 className='font-Anton font-normal lg:text-5xl md:text-[40px] text-[38px]  text-[#FFFF] leading-[57px] text-center'>Juegos en vivo</h2>
                <div className="flex flex-wrap flex-row -mx-3 lg:mt-14 mt-9 justify-center">
                    {card}
                </div>
            </div>
            <img src={vevoellipse} alt="poker" className='absolute right-0 top-[-36%] -z-10' />
        </div>
    );
};

export default juegos
