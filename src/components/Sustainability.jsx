import React from 'react'
import images from '../utils/images'
const categories = [
  "Soil Health",
  "Biological Soil Treatments",
  "Bio-Stimulants",
  "Water Management",
  "Organic Input Material"
];

const Sustainability = () => {
  return (
    <div className=''>
      <div className="relative  flex-shrink-0">
        <img src={images.sustainabilitymain} alt="" />
        <div className=" absolute top-11 left-[170px] text-3xl bg-[#3D9BE9] text-white py-2  font-thin px-8">Sustainability</div>
      </div>
      <div>
        <div className='flex flex-row items-center justify-evenly p-8'>
          {/* Sidebar */}
          <div className="w-full md:w-1/4 space-y-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="w-full text-left bg-[#3D9BE9] text-white py-2 px-4  hover:bg-blue-900 transition"
              >
                {category} &gt;
              </button>
            ))}
            <div>
              <img src={images.sustainside} alt="" />
            </div>
          </div>


          {/* Content */}
          <div className="w-[60%] h-full ">

            <div className="font-semibold">Who WE Are</div>
            <div className='font-thin'>
              With distribution on five continents, Grow More, Inc. is a major international manufacturer, with leading market position in a broad range of agricultural, horticultural and specialty chemicals.
            </div>
            <div className="font-semibold pt-6">People Create the Value</div>
            <div className='font-thin'>
              A global network of more than 3,500 talented agronomists, chemists, engineers and field technicians work diligently to make people's lives better with the highest quality products and science based solution.

            </div>
            <div className="font-semibold pt-6">Our Commitment</div>

            <div className='font-thin'>
              To create value through product and service excellence, to build trust with end user, dealers and distributors. To continue contributing to environmental protection and maximize health and safety in the workplace and field, while inspiring value, and creative innovation.
            </div>
            <div className="font-semibold pt-6 ">What We Do</div>
            <div className='font-thin'>
              Our goal at Grow More, Inc. is to develop innovative scientific solutions for our, customers - first in the form of quality products, but also in the form of expertise, information, technology and advance science. We want to help our customers be successful by providing solutions that break through the barrier of traditional products.
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sustainability
