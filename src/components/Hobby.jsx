import React from 'react'
import images from '../utils/images'

const Hobby = () => {
  return (
    <div>
      <div className='relative flex-shrink-0'>
        <img src={images.innovation1} alt="" />

        <div className='absolute bg-[#3D9BE9] top-10 left-[170px] p-4 text-2xl font-thin text-white'>Hobby Market  Residential  Small Package</div>
      </div>

      <div className='flex flex-row items-center justify-evenly p-8'>
        <div className='w-[279px] h-[326px]'><img className='' src={images.innovation1side1} alt="" /></div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={images.innovation1side2} // Replace with actual image URL
            alt="Grow More Packaging"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-gray-700">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-500">
            HOBBY MARKET - The Grow More Difference
          </h2>
          <p className="mt-2 text-sm md:text-base leading-relaxed">
            Constant achievement through applied research has been our motto since
            1918 and provides the basis for the dedicated product quality and
            consumer preference.
          </p>

          <ul className="mt-4 space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-lg text-gray-600 mr-2">•</span>
              Grow More is ranked number one as the brand consumers prefer in the
              Western U.S.A.
            </li>
            <li className="flex items-start">
              <span className="text-lg text-gray-600 mr-2">•</span>
              Worldwide distribution and leading expert in agriculture –
              horticulture and floriculture.
            </li>
            <li className="flex items-start">
              <span className="text-lg text-gray-600 mr-2">•</span>
              Guaranteed customer satisfaction.
            </li>
            <li className="flex items-start">
              <span className="text-lg text-gray-600 mr-2">•</span>
              Superior Technology.
            </li>
            <li className="flex items-start">
              <span className="text-lg text-gray-600 mr-2">•</span>
              Optimal Production Facilities.
            </li>
            <li className="flex items-start">
              <span className="text-lg text-gray-600 mr-2">•</span>
              Service through the product life cycle.
            </li>
          </ul>
          <div className="max-w-5xl mx-auto p-6 space-y-12">

            {/* Section 2: Packaging That Creates Demand */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left Image */}


              {/* Right Content */}
              <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 text-gray-700">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-500">
                  Packaging That Creates Demand
                </h2>
                <p className="mt-2 text-sm md:text-base leading-relaxed">
                  The Grow More category of products is one of the fastest-growing
                  brands in the Western U.S.A. Countless customers rely on research,
                  innovation, and new technologies.
                </p>

                <div className="mt-4 space-y-3 text-sm md:text-base">
                  <p>
                    <span className="font-semibold text-blue-500">
                      Research and Development:
                    </span>{" "}
                    Grow More maintains a customer base of commercial wholesale plant
                    growers and agricultural crop production growers. This experience
                    brings continual improvement to the entire product family.
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">
                      Consumer Research:
                    </span>{" "}
                    What do consumers want? What gets a consumer to respond? We focus
                    on what raises customer awareness for their special needs,
                    accurately and effectively for profitable growth and brand
                    loyalty.
                  </p>

                  <p>
                    <span className="font-semibold text-blue-500">Innovation:</span>{" "}
                    New products, improved packaging, help keep consumers aware of new
                    technological improvements and keep our product category
                    profitable and satisfying to our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hobby
