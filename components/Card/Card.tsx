import { rotaKartlari } from '@/constants'
import React from 'react'
import { Button } from '../ui/button'

export const Card = () => {
    return (
        <div>
            <div>
                <p data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay={100} className='font-poppins font-semibold container text-gray-700 mt-16 text-2xl'>
                    Popüler Rotalar
                </p>
            </div>
            <div className='container mt-2 overflow-x-auto scrollbar-hide content-center lg:h-[425px] h-[320px]'>

                <div className="flex justify-center gap-8 w-max">
                    {rotaKartlari.map((rota, index) => (
                        <div
                            key={index}
                            className="transition  duration-300 cursor-pointer hover:scale-[1.05] rounded-3xl lg:w-[600px] lg:h-[400px] w-[450px] h-[300px]  justify-center items-center relative"
                        >
                            <img
                                src={rota.image}
                                alt="img"
                                className="object-cover  lg:w-[600px] lg:h-[400px] w-[450px] h-[300px] rounded-3xl"
                            />
                            <div className="absolute  lg:w-[600px] lg:h-[400px] w-[450px] h-[300px] inset-0 bg-black bg-opacity-15 rounded-3xl"></div>

                            <div
                                data-aos="fade-down"
                                data-aos-once="true"
                                data-aos-delay={200}
                                className="h-16 inset-0 flex flex-row absolute ml-6 mt-6"
                            >
                                <div className="bg-white rounded-full h-16 w-16 grid place-items-center">
                                    <img src={rota.icon} alt="icon" className="h-12" />
                                </div>
                                <div className="ml-4 content-center">
                                    <span className="font-bold text-md lg:text-lg xl:text-xl font-poppins text-white">
                                        {rota.title}
                                    </span>
                                    <p className="font-normal text-xs lg:text-sm xl:text-sm mt-1 mb-1 text-white font-poppins">
                                        {rota.description}
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200" className="items-end lg:w-[552px] lg:h-[352px] w-[402px] h-[252px]  m-6 justify-end flex inset-0 absolute">
                                <Button size={"discoverSize"} variant={"discoverButton"} type="button">
                                    <span className="font-poppins">Keşfetmeye başla</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
