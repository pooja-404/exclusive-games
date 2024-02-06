import React from 'react'
import con1 from '../assets/images/con1.webp';
import con2 from '../assets/images/con2.webp';
import con3 from '../assets/images/con3.webp';

const cards = [{
    bg: con1,
    animation: "flip-down"
},
{
    bg: con2,
    animation: "flip-down"
},
{
    bg: con3,
    animation: "flip-down"
},

]
const Ellos = () => {
    const card = cards.map((cards, i) => (<div key={i} className="lg:w-1/3 md:w-2/4  w-full px-3 flex justify-center group duration-500 mb-6">
        <div className="lg:max-w-[364] w-full rounded-lg bg-[url(url(./assets/images/gline.webp)]  h-[265px] bg-no-repeat bg-center bg-cover   overflow-hidden relative" data-aos={`${cards.animation}`} data-aos-duration="1000" data-aos-offset="500"
            data-aos-easing="ease-in-sine" style={{ backgroundImage: `url(${cards.bg})` }}>
            <div className="absolute w-full  bg-[#000000B2] hover:shadow-[7px_9px_15px_0px_#00000033] lg:max-w-[364px] h-[265px] flex justify-center top-[-100%] group-hover:top-0 left-0 items-center duration-500">
                <button className="text-white opacity-100 relative z-[2] border border-white rounded-full py-[13px] px-[46px] border-solid after:absolute after:left-[-3%]  after:bottom-[-30%] font-Inter font-bold text-base leading-[25.6px] after:content-[url(./assets/images/wline.webp)] hover:scale-75 hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] group-hover:duration-500  hover:bg-gradient hover:border-[1px]  hover:border-[transparent]">Rcasinovip</button>
            </div>
        </div>
    </div>))
    return (
        <div className="max-w-[1140px] mx-auto px-3 lg:mb-32 lg:mt-36 md:my-25 my-10 relative z-20">
            <h2 className=" font-Anton lg:text-5xl md:text-[40px] sm:text-[38px] text-[28px] text-center md:leading-[57.6px]  font-normal text-white  mb-4 ">
                Ellos eligieron apostar con nosotros
            </h2>
            <div className="flex flex-wrap flex-row -mx-3 pt-9 justify-center">
                {card}
            </div>
            <p className='font-semibold font-Inter font-base leading-[25px]  mx-auto pt-5 text-center text-white' data-aos="zoom-out-up">Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego. <br />
                Ahora, la próxima apuesta está en tus manos. <br />
                Elige ganar. Elige exclusive game.</p>

        </div>
    );
};
export default Ellos