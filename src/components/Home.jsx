import React, { useEffect, useState } from 'react'
import images from '../utils/images'
import "../index.css"
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';

const Home = () => {


  const [isOpen, setIsOpen] = useState(null);
  const handleMouseEnter = (menu) => {
    setIsOpen(menu)
  }
  const handleMouseLeave = () => {
    setIsOpen(null)
  }



  return (
    <div className='w-full h-screen'>

      {/* Fixed Header & Navbar */}
      <div className="w-full bg-white fixed top-0 left-0 z-50 shadow-lg">
        <div className='w-full max-w-[1200px] flex items-center justify-center flex-col'>

          {/* Top Section */}
          <div className=''>
            <div className='flex flex-row items-center justify-evenly gap-10 mt-4 py-1'>
              <div className='w-[130px] h-[80px] '>
                <img className='w-full object-cover' src={images.worldmap} alt="map" />
              </div>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='w-[200px] h-[40px] '>
                <img className='w-full object-cover' src={images.logo} alt="logo" />
              </Link>
              <h2 className='tracking-widest text-[20px]'>GLOBAL</h2>
              <h6 className='text-[rgb(55,122,40)] italic font-thin font-serif'>Constant Achievement Through Applied Research</h6>
              <div>
                <img src={images.usaflag} alt="flag" />
              </div>
            </div>
          </div>

          {/* Navbar */}
          <nav className='w-full '>
            <ul className='text-gray-800 flex flex-row items-center text-[16px] font-thin gap-10 py-2 pb-4 justify-center cursor-pointer space-x-6'>
              <li><Link to="/" >Home</Link></li>
              <div className='border-l border-gray-500 pl-10 relative inline-block '>
                <Link
                  to="/about"
                  onMouseEnter={() => handleMouseEnter("about")}
                  className='block'>About Us</Link>
                {isOpen === "about" && (
                  <div
                    onMouseEnter={() => handleMouseEnter("about")}
                    onMouseLeave={() => handleMouseLeave(null)}
                    className='absolute z-50 w-[170px] mt-1 bg-white shadow-lg p-2 whitespace-nowrap'>
                    <Link to="/companyprofile" className='block py-1 px-3 hover:bg-gray-100'>Company Profile</Link>
                    <Link to="/globaloperations" className='block py-1 border-t border-gray-500 px-3 hover:bg-gray-100' >Global Operations</Link>
                  </div>
                )}
              </div>
              <div className='border-l border-gray-500 pl-10 relative inline-block '>
                <Link
                  to="/innovation"
                  onMouseEnter={() => { handleMouseEnter("innovation") }}
                  className='block '>Innovation In Products</Link>

                {isOpen === "innovation" && (
                  <div
                    onMouseEnter={() => { handleMouseEnter("innovation") }}
                    onMouseLeave={() => handleMouseLeave(null)}
                    className='absolute z-50 w-[250px] bg-white whitespace-nowrap '
                  >
                    <Link className='block py-1 px-3  hover:bg-gray-100 '>Hobby Market</Link>
                    <Link className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Foliar Nutrients</Link>
                    <Link className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Fertilizers</Link>
                    <Link className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Micronutrients</Link>
                    <Link className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Speciality Products</Link>
                    <Link className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Adjuvants</Link>
                    <Link className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Humid Acid/Orgain Acid</Link>
                  </div>
                )}
              </div>
              <div className='border-l border-gray-500 pl-8 relative inline-block'>
                <Link
                  to="/sustainability"
                  className='block'
                  onMouseEnter={() => handleMouseEnter("sustainability")}
                >Sustainability</Link>
                {isOpen === "sustainability" && (
                  <div className='absolute z-50 w-[220px] bg-white whitespace-nowrap'
                    onMouseEnter={() => handleMouseEnter("sustainability")}
                    onMouseLeave={() => handleMouseLeave(null)}
                  >
                    <a href="" className='block py-1 px-3  hover:bg-gray-100 '>Soil Health</a>
                    <a href="" className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Biological Soil Treatments</a>
                    <a href="" className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Bio-Stimulants</a>
                    <a href="" className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Water Management</a>
                    <a href="" className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Organic Input Materials</a>
                  </div>
                )}

              </div>
              <div className='border-l border-gray-500 pl-8'>
                <Link to="/careers" >Careers</Link>
              </div>
              <div className='border-l border-gray-500 pl-8 relative inline-block'>
                <Link
                  to="contact"
                  onMouseEnter={() => handleMouseEnter("contact")}
                >Contact Us</Link>
                {isOpen === "contact" && (
                  <div
                    onMouseEnter={() => handleMouseEnter("contact")}
                    onMouseLeave={() => handleMouseLeave(null)}
                    className='absolute z-50 w-[200px] bg-white whitespace-nowrap'
                  >
                    <a href="" className='block py-1 px-3  hover:bg-gray-100 '>Authorized Resale Policy</a>
                    <a href="" className='block py-1 px-3 border-t border-gray-500 hover:bg-gray-100'>Privacy Policy</a>
                  </div>
                )}
              </div>
            </ul>
          </nav>

        </div>
      </div>

      {/* Added margin-top so content doesn't overlap the fixed navbar */}
      {/* <div className="mt-[150px]"> */}
      <div className='pt-[140px] mt-2 '>
        <Outlet />
      </div>

      {/* Footer */}
      <footer className='w-full h-[130px] bg-green-700'>
        <div className='flex flex-row items-center space-x-5 justify-center text-green-300 font-thin font-sans text-[14px] pl-6 '>
          <div className='pb-6'>
            <div className='flex flex-col items-start justify-center pt-5'>
              <p>&copy; Grow More, Inc.</p>
              <ul className="space-x-4 flex flex-row cursor-pointer underline whitespace-nowrap">
                <li><a href="">Privacy Policy</a></li>
                <li className='border-l pl-4 border-green-300 '><a href="">Authorized Resale Policy</a></li>
              </ul>
            </div>
          </div>
          <div>
            <img src={images.logo} alt="" />
          </div>
          <p className="text-sm ">&copy; 2025 Abdur Rehman. Built for learning purposes.</p>
          <div>
            <img src={images.footer} alt="" />
          </div>
        </div>

      </footer>


    </div>

  );
}

export default Home;
