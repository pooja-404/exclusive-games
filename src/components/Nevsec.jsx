import React from 'react'
import logo from '../assets/images/logo.webp'
import { useState } from 'react';


const Nevsec = () => {
    const [show, setshow] = useState(true);
    function nav() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden")
    }
    return (
        <>
            <div className="max-w-[1140px] mx-auto px-3  py-5 ">
                <div className="flex items-center justify-between">
                    <img src={logo} alt="logo" />
                    <ul className={`flex items-center gap-7 mobileView ${show ? "right-[-100%]" : "right-0"}`} >
                        <li>
                            <a href="" className="font-Inter font-medium font-base text-[#d2d8da]  hover:text-[#ffffff] transition-all duration-500">
                                Hogar
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-Inter font-medium font-base text-[#d2d8da]  hover:text-[#ffffff] transition-all duration-500">
                                Misión
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-Inter font-medium font-base text-[#d2d8da]  hover:text-[#ffffff] transition-all duration-500">
                                Tragamonedas
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-Inter font-medium font-base text-[#d2d8da]  hover:text-[#ffffff] transition-all duration-500">
                                Por qué elegirnos
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-Inter font-medium font-base text-[#d2d8da]  hover:text-[#ffffff] transition-all duration-500">
                                Ofertas
                            </a>
                        </li>
                        <li className='lg:hidden block '>
                            <a href="" className='p-[13px_46px_13px_46px] text-base font-bold font-Inter text-[#FFFFFF] border-solid border-[1px] rounded-[41px] gap-[10px]  relative after:absolute after:content-[url(./assets/images/wline.webp)] after:top-[25px] after:left-[-6px] '>Acceso</a>
                        </li>
                    </ul>
                    <li className='lg:block hidden '>
                        <a href="" className='p-[13px_46px_13px_46px] text-base font-bold font-Inter hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] group-hover:duration-500  hover:bg-gradient hover:border-[1px]  hover:border-[transparent]  text-[#FFFFFF] border-solid border-[1px] rounded-[41px] gap-[10px]  relative after:absolute after:content-[url(./assets/images/wline.webp)] after:top-[26px] after:left-[-6px]  '>Acceso</a>
                    </li>
                    <label className=" lg:hidden" onClick={nav}>
                        {show ? (
                            <div className="z-20 relative pl-2">
                                <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6"></span>
                                <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                            </div>
                        ) : (
                            <div className="z-20 relative">
                                <span className="flex bg-[#ffff] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                <span className="flex bg-[#ffff] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                            </div>
                        )}
                    </label>
                </div>
            </div>
        </>
    )
}
export default Nevsec
