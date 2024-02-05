import React, { useEffect, useState } from "react";
import preloder2 from '../assets/images/logoo.webp'

const Preloder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div className="overflow-x-clip">
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#00141b] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div className="bg-[#00141b] ">
                        <div className="border border-gray-200 p-2 rounded-md shadow-lg shadow-green-300 animate-bounce">
                            <div className="flex items-end gap-1">
                                <span className="sm:text-6xl text-4xl  text-white font-semibold font-Inter">E</span>
                                <img src={preloder2} alt="cpanel" className="duration-500 w-[10%] h-[15%] animate-bounce " />
                                <span className="sm:text-6xl text-4xl font-semibold text-white font-Inter">clusive</span>
                                <span className="sm:text-6xl text-4xl font-semibold font-Inter text-[#7AF57A]">Games</span>
                            </div>
                        </div>
                    </div>;
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloder