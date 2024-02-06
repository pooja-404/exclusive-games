import React from 'react'
import slots1 from '../assets/images/slots1.webp';
import slots2 from '../assets/images/slots2.webp';
import slots3 from '../assets/images/slots3.webp';
import slots4 from '../assets/images/slots4.webp';
import slots5 from '../assets/images/slots5.webp';
import slots6 from '../assets/images/slots6.webp';



const cards = [{
    bg: slots1,
     animation: "flip-up",
},
{
    bg: slots2,
     animation: "flip-up",
},
{
    bg: slots3,
     animation: "flip-up",
},
{
    bg: slots4,
     animation: "flip-down",
},
{
    bg: slots5,
     animation: "flip-down",
},
{
    bg: slots6,
     animation: "flip-down",
},

]
const Slots = () => {

    const card = cards.map((cards, i) => (<div key={i} className="lg:w-1/3 md:w-2/4  w-full px-3 flex justify-center group duration-500 mb-6">
        <div className='hover:bg-slot p-[1px] rounded-[8px] w-full'>
            <div className="lg:max-w-[364px] rounded-lg bg-[url(url(./assets/images/gline.webp)] w-full h-[265px] overflow-hidden relative bg-no-repeat bg-center bg-cover  bg-gradient p-[1px] " data-aos={`${cards.animation}`}  data-aos-offset="500"
                data-aos-easing="ease-in-sine"  style={{ backgroundImage: `url(${cards.bg})` }} >
                <div className="absolute w-full  bg-[#000000B2] hover:shadow-[7px_9px_15px_0px_#00000033] lg:max-w-[364px] h-[265px] flex justify-center top-[-100%] group-hover:top-0 left-0 items-center duration-500">
                    <button className="text-white hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] group-hover:duration-500  hover:bg-gradient hover:border-[1px]  hover:border-[transparent] opacity-100 relative z-[2] border border-white rounded-full py-[13px] px-[46px] border-solid after:absolute after:left-[-3%]  after:bottom-[-30%] font-Inter font-bold text-base leading-[25.6px] after:content-[url(./assets/images/wline.webp)] hover:scale-75">Jugar</button>
                </div>
            </div>
        </div>
    </div>))
    return (
        <div className="lg:mt-[140px] md:py-20 py-9">
            <h2 className=" font-Anton lg:text-5xl md:text-[40px] text-[38px] text-center leading-[57.6px] text-[#00141B] font-normal mb-4"data-aos="flip-up">
                Slots
            </h2>
            <p className=" font-Inter text-center text-base font-medium leading-[25.6px] text-[#00141B] max-w-[904px] mx-auto mb-9 md:mb-[60px]"data-aos="flip-up">
                En Exclusive Games, ofrecemos una selección de más de 600 juegos de los
                principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic,
                IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
                incansablemente para innovar y ampliar nuestra oferta de experiencias,
                garantizando la máxima seguridad con operaciones protegidas por cifrado
                SSL de 256 bits.
            </p>
            <div className="flex flex-wrap flex-row -mx-3">
                {card}
            </div>
            <div className='flex justify-center'>
                <button className='hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] hover:text-white duration-500 transition-all  text-[#00141B] bg-gradient font-Inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-4 relative after:absolute after:content-[url(./assets/images/gline.webp)] after:top-[31px] after:left-[-6px] '>Mostrar más</button>
            </div>
        </div>
    );
};

export default Slots