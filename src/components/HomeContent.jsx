import React from 'react'
import { useEffect, useState } from 'react';
import images from '../utils/images';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HomeContent = () => {

  const carouselImages = [
    { src: images.home1, title: "Horticulture", description: [{ para: "Greenhouse / Nursery" }], button: [{ text: "Learn More>" }] },
    { src: images.home2, title: "Hobby Market", description: [{ para: "Residential" }, { para: "Small Package" }], button: [{ text: "Learn More >" }] },
    { src: images.home3, title: "Hobby Market", button: [{ text: "Conventional>" }, { text: "Sustainable>" }] }
  ]

  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval)
  }, [curr])

  const prev = () => {
    setCurr((prevIdx) => prevIdx === 0 ? carouselImages.length - 1 : prevIdx - 1)
  }
  const next = () => {
    setCurr((prevIdx) => prevIdx === carouselImages.length - 1 ? 0 : prevIdx + 1)
  }

  return (


    <div className='overflow-hidden relative'>
      <div className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {carouselImages.map((item, idx) => (
          <div key={idx} className='relative w-full flex-shrink-0'>
            <img src={item.src} alt={`Slide ${idx + 1}`} className="w-full flex-shrink-0" />
            <div className='absolute inset-0 flex items-center justify-center -translate-x-[300px] '>
              <div className='flex items-center justify-center flex-col w-[350px] h-[350px] bg-[#4682B4E8] text-white '>
                <h2 className='text-5xl'>{item.title}</h2>
                {item.description?.map((p, id) => (
                  <p className='text-3xl' key={id}>{p.para}</p>
                ))}
                {item.button.map((btn, idx) => (
                  <div className='flex flex-col mt-4 items-center justify-center group' key={idx}>
                    <a className='p-4 text-2xl w-[200px] border cursor-pointer group-hover:bg-blue-800 '>
                      {btn.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className='absolute inset-0 flex items-center justify-between text-white text-4xl'>
        <button onClick={prev} className='hover:bg-gray-400 rounded-full p-2'>
          <BsChevronCompactLeft size={60} />
        </button>
        <button onClick={next} className='rounded-full p-2'>
          <BsChevronCompactRight size={60} />
        </button>
      </div>
    </div>




  )
}

export default HomeContent
