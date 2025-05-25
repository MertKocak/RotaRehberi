import React from 'react'

export const Hero = () => {
    return (
        <div className='min-h-[560px] mt-[24px] md:min-h[560px] justify-center items-center relative'>

            <img src="/bg6.jpg" alt="img" className="object-cover w-full h-[600px]" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div data-aos="fade-down" data-aos-once="false" data-aos-delay={600} className='inset-0 absolute container content-end mb-16 lg:mb-24'>
                <span className='font-bold text-3xl lg:text-4xl xl:text-5xl font-poppins text-white'>
                    Keşfetmeye değer rotalar,<br></br><span className='text-custom-yellow underline'>planlı</span> ve <span className='text-custom-green underline'>ilham dolu</span> yolculuklar.
                </span>
                <p className='font-normal mt-4 text-lg lg:text-lg xl:text-xl text-white font-manrope'>
                    Seyahat planlamasını kolaylaştıran, özelleştirilmiş rotalar ve keşif önerileriyle dolu bir dijital rehber.<br></br>
                    Gezginler için hazırlanmış akıllı rota çözümleri, detaylı mekan bilgileri ve gerçek deneyimlerden oluşan bir kaynak.
                </p>
            </div>
        </div>
    )
}
