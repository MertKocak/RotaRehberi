import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const Footer = () => {
    return (
        <div className=' border-t border-gray-300 mt-20'>
            <div className='container items-center justify-center place-items-center h-[720px] md:mt-10 md:h-[420px] lg:items-center xl:h-[360px] gap-y-6 flex-col grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1'>

                <div className='mt-0 xs:mt-8'>
                    <p className='font-bold font-poppins text-xl text-custom-yellow mb-2'>Kurumsal</p>
                    <div>
                        <Link href={"/"}>
                            <p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                                Rota Rehberi Hakkında
                            </p>
                        </Link>
                        <Link href={"/"}>
                            <p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                                Misyon & Vizyon & Politika
                            </p>
                        </Link>
                        <Link href={"/"}>
                            <p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                                Kişisel Verilerin Korunması
                            </p>
                        </Link>
                        <Link href={"/"}>
                            <p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                                Sıkça Sorulan Sorular
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='ml-4 xl:ml-0'>
                    <p className='font-bold font-poppins text-xl text-custom-yellow mb-2 '>İletişim</p>
                    <div>
                        <Link href="/"><p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                            Bize Ulaşın
                        </p>
                        </Link>
                        <Link href="/"><p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                            Bilgi Edinme
                        </p>
                        </Link>
                        <Link href="/"><p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                            Görüş, Öneri ve Şikayetleriniz
                        </p>
                        </Link>
                        <Link href="/"><p className='font-normal font-poppins text-md text-gray-700 mt-1 hover:text-gray-900'>
                            Kariyer Fırsatları
                        </p>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-y-6 xl:mb-0'>
                    <div className='flex flex-row items-center'>
                        <div className='bg-custom-green h-10 w-10 rounded-full place-items-center content-center'>
                            <Image
                                src="/telephone.png"
                                width={20}
                                height={20}
                                alt="telephone"
                            />
                        </div>
                        <p className='font-normal font-poppins text-gray-700 text-md ml-2'>+905554443322</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='bg-custom-green h-10 w-10 rounded-full place-items-center content-center'>
                            <Image
                                src="/email.png"
                                width={20}
                                height={20}
                                alt="email"
                            />
                        </div>
                        <p className='font-normal font-poppins text-gray-700 text-md ml-2'>info@rotarehberi.com</p>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <p className='font-normal font-poppins text-gray-700 text-md ml-2'>Bizi Takip Edin</p>
                        <Link href={"/"}>
                            <img
                                src="/instagram.png"
                                alt="instagram"
                                className='object-cover h-10'
                            />
                        </Link>
                        <Link href={"/"}>
                            <img
                                src="/twitter.png"
                                alt="twitter"
                                className='object-cover h-[33px] mr-2'
                            />
                        </Link>
                    </div>
                </div>
                <Link className='justify-center' href="/">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={200}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className='h-20 content-center mt-10 text-center border-t border-gray-300 '>
                <Link href={"https://www.mertkocak.online/"}>
                    <p className='font-semibold font-poppins text-sm text-gray-700 hover:text-orange-500'> Developed with 🧡 by Mert Koçak</p>
                </Link>
            </div>
        </div>
    )
}
