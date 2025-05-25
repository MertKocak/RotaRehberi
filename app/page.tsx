'use client';

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Card } from '@/components/Card/Card';
import { Features } from '@/components/Features/Features';
import { Footer } from '@/components/Footer/Footer';
/* import { AboutUs } from '@/components/AboutUs/AboutUs'; */

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    })
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Card></Card>
      {/* <AboutUs></AboutUs> */}
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}
