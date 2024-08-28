'use client'

import React, { useEffect, useRef } from 'react'
import MainPage from "@/app/Components/MainPage/MainPage"
import FooterComponent from "./Components/FooterComponent/FooterComponent"
import GalleryComponent from './Components/GalleryComponent/GalleryComponent'

export default function Home() {
  const cloudsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const clouds = cloudsRef.current.children;
      
      Array.from(clouds).forEach((cloud, index) => {
        const speed = 0.02 + (index % 3) * 0.02;
        cloud.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500" />
        {/* Cloud background */}
        <div ref={cloudsRef} className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-br ${
                ['from-blue-300 to-purple-300', 'from-pink-300 to-yellow-300', 'from-green-300 to-blue-300', 'from-yellow-300 to-red-300'][i % 4]
              } opacity-20 transition-transform duration-300 ease-out`}
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10">
        <MainPage />
        <GalleryComponent />
        <FooterComponent />
      </div>
    </div>
  )
}