import React from 'react'


function Plataforma() {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-3 lg:py-32 md:py-24 py-10 lg:mb-5 '>
                <div className='bg-[url(./assets/images/plataforma.webp)] p-[10px] bg-size bg-center bg-no-repeat w-full h-[341px] rounded-[16px] border-[1px] border-[#858e93] flex justify-center items-center flex-col' data-aos="fade-down">
                    <h2 className='font-normal font-Anton md:text-[32px] text-[30px] text-[#ffff] text-center' data-aos="fade-down">Lanza tu propia plataforma en sólo 2 semanas</h2>
                    <div className='flex justify-center'>
                        <button className='hover:shadow-[0_0_14px_9px_rgba(014,218,09,0.50)] duration-500 transition-all hover:scale-125 text-[#00141B]   bg-gradient font-Inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-12 relative after:absolute after:content-[url(./assets/images/gline.webp)] after:top-[31px] after:left-[-6px]  '>Leer más</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plataforma