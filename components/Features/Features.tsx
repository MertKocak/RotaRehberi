import { featuresCards } from '@/constants'
import React from 'react'

export const Features = () => {
    return (
        <div className='container mt-12'>
            <div>
                <p data-aos="fade-down"
                    data-aos-once="true"
                    data-aos-delay={100} className='font-poppins font-semibold text-gray-700  text-2xl'>
                    Hizmetlerimiz
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-4">
                {featuresCards.map((feature, index) => (
                    <div data-aos="fade-down"
                        data-aos-once="true"
                        data-aos-delay={feature.delay}
                        key={index}
                        className="border border-gray-300 relative rounded-3xl md:h-[330px] lg:h-[400px]  min-w-[200px] min-h-[280px]  max-w-[800px] xl:h-[360px]"
                    >
                        <div style={{ backgroundColor: feature.color }} className='relative place-content-center text-center place-items-center flex rounded-t-3xl min-w-[198px] sm:min-h-[136px] h-[96px]  max-w-[798px] sm:max-h-[136px]'>

                            <span
                                className="text-white font-bold mb-8 ml-6 mr-6 text-sm sm:text-lg xl:text-xl font-poppins"
                            >
                                {feature.title}
                            </span>

                            <div
                                style={{ backgroundColor: feature.color }}
                                className=" sm:h-24 sm:w-24 h-20 w-20 top-12 sm:top-20 absolute rounded-full grid place-items-center "
                            >
                                <img src="featuressmallimage.png" alt="icon" className="sm:h-16 h-12" />
                            </div>
                        </div>

                        <div className="ml-6 mr-6 mt-[168px] content-start mb-6 absolute inset-0">

                            <p className="font-normal text-xs sm:text-sm -mt-4 sm:mt-6 text-gray-700 font-manrope">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}
