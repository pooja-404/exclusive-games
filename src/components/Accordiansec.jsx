import React from "react";
import accorllip from '../assets/images/aellipse.webp'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg
                xmlns="http://www.w3.oyg/1700/svg"
                width="21"
                height="2"
                viewBox="0 0 21 2"
                fill="white"
                className={`${id === open ? "" : "rotate-90"
                    } h-5 w-5   transition-transform`}
            >
                <path
                    d="M1.69629 1H19.6963"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            <svg
                className="absolute rotate-0 top-[9px]"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="2"
                viewBox="0 0 21 2"
                fill="white"
            >
                <path
                    d="M1.69629 1H19.6963"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}

const Accordiansec = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="relative z-10">
            <div className="max-w-[970px] mx-auto px-3">
                <h2 className=" lg:text-5xl md:text-[40px] sm:text-[38px] text-[28px] font-Anton leading-[120%] font-normal text-center sm:pb-10 pb-5 md:pb-[60px] text-white" data-aos="zoom-out-down">
                    Preguntas más frecuentes
                </h2>
                <Accordion
                    className=" border-[#80898D] border md:mb-8 mb-5 rounded-[10px] py-4 px-5" data-aos="fade-up-right"
                    open={open === 1}
                    icon={<Icon id={1} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className="font-Anton text-[15px] sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                    >
                        ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
                        plataformas de juegos?
                    </AccordionHeader>
                    <AccordionBody className="font-Inter text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                        En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                        respaldadas por más de 15 años de dedicación al desarrollo de
                        multiplataformas para juegos de azar.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className=" border-[#80898D] border md:mb-8 mb-5 rounded-[10px] py-4 px-5  overflow-hidden" data-aos="fade-up-left"
                    open={open === 2}
                    icon={<Icon id={2} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className="font-Anton text-[15px] sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                    >
                        {" "}
                        ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
                    </AccordionHeader>
                    <AccordionBody className="font-Inter text-base md:text-[14px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                        En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                        respaldadas por más de 15 años de dedicación al desarrollo de
                        multiplataformas para juegos de azar.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className=" border-[#80898D] border md:mb-8 mb-5  rounded-[10px] py-4 px-5 " data-aos="fade-up-right"
                    open={open === 3}
                    icon={<Icon id={3} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className="font-Anton text-[15px] sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 " >
                        {" "}
                        ¿Cuáles son las opciones de juego disponibles en las versiones
                        Silver, Luxury y Platinum?
                    </AccordionHeader>
                    <AccordionBody className="font-Inter text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                        En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                        respaldadas por más de 15 años de dedicación al desarrollo de
                        multiplataformas para juegos de azar.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className=" border-[#80898D] border md:mb-8 mb-5 rounded-[10px] py-4 px-5 " data-aos="fade-up-left"
                    open={open === 4}
                    icon={<Icon id={4} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(4)}
                        className="font-Anton text-[15px] sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                    >
                        ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
                    </AccordionHeader>
                    <AccordionBody className="font-Inter text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                        En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                        respaldadas por más de 15 años de dedicación al desarrollo de
                        multiplataformas para juegos de azar.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className=" border-[#80898D] border md:mb-8 mb-5 rounded-[10px] py-4 px-5 " data-aos="fade-up-right"
                    open={open === 5}
                    icon={<Icon id={5} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(5)}
                        className="font-Anton text-[15px] sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                    >
                        ¿Qué métodos de pago aceptan?
                    </AccordionHeader>
                    <AccordionBody className="font-Inter text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                        En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                        respaldadas por más de 15 años de dedicación al desarrollo de
                        multiplataformas para juegos de azar.
                    </AccordionBody>
                </Accordion>
                <Accordion
                    className=" border-[#80898D] border md:mb-8 md:mb-5 rounded-[10px] py-4 px-5 " data-aos="fade-up-left"
                    open={open === 6}
                    icon={<Icon id={6} open={open} />}
                >
                    <AccordionHeader
                        onClick={() => handleOpen(6)}
                        className="font-Anton text-[15px] sm:text-[16px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                    >
                        ¿Puedo probar sus juegos antes de comprometerme?
                    </AccordionHeader>
                    <AccordionBody className="font-Inter text-sm md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                        En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                        respaldadas por más de 15 años de dedicación al desarrollo de
                        multiplataformas para juegos de azar.
                    </AccordionBody>
                </Accordion>
            </div>
            <img src={accorllip} alt="poker" className='absolute left-0 bottom-[1%] -z-10' />
        </div>
    );
};

export default Accordiansec;