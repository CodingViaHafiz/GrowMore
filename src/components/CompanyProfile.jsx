import React from 'react'
import images from '../utils/images'

const CompanyProfile = () => {
  return (
    <div >
      <div>
        <div className='relative flex-shrink-0'>
          <img src={images.aboutmain} alt="" />
          <div className='inset-0 absolute top-9 left-0 ml-[150px] flex items-center justify-center bg-[#3D9BE9]  h-[65px] w-[250px]'>
            <h2 className='text-2xl tracking-widest text-white'>Company Profile</h2>
          </div>
        </div>
        <div className='flex flex-row items-center justify-evenly p-8'>
          <div className='w-[279px] h-[326px]'><img className='' src={images.aboutcompanyside} alt="" /></div>
          <div className='w-[60%] h-[full] tracking-widest'>First established in Hollywood, California in 1918 by William H. Atwill as National Chemical NACCO, as a distributor for Mallinkrodt reagent chemicals and Eastman Kodak company. A few years later in 1921 the company began to supply its own proprietary photographic chemicals to the growing Hollywood movie industry and also developed chemical specialty products for the metal, automobile and cleaning applications.
            <br />


            Prior to World War II the company’s sales focus was the southern California area. However in 1944 John F. Atwill, succeeded his father and moved the Company to downtown Los Angeles in the early 1950’s rapidly expanded and diversified the product line to include marine and petroleum chemical specialties, industrial, aircraft and water treatment chemicals.
            <br />


            As the Company continued to expand it moved to a new 5 acre manufacturing facility in 1956 and Incorporated as National Research & Chemical Company.

            <br />

            Sales’ offices were located in the metropolitan cities of Hamburg, Munich, Tokyo, Mexico City, Buenos Aires, Sydney, New York, Los Angeles, San Francisco and Sunnyvale, California. Satellite manufacturing facilities were located in Tokyo, Hamburg, New York, Mexico City and Sunnyvale.
            <br />


            The early 1970’s opened an opportunity to produce electronic printed circuit board chemicals and marked the beginning of Grow More fertilizers and Micronutrients for agriculture and horticulture.

            <br />

            The development of agricultural chelated micronutrients derived from knowledge gained in the formulation of boiler, power generating and water treatment chemicals.


            <br />
            In the 1980’s was a time of rapid expansion for agricultural, horticultural, animal health products, retail small packages for the lawn and garden markets. This time period also marked a decline in market share for electronics, water treatment and industrial chemicals.

            <br />

            The 1980’s also marks the time of a Company name change transition from NACCO (National Research and Chemical Company) to Grow More, Inc. Today our products are distributed worldwide and throughout the Western United States through a dealer/distributor network.

            <br />

            World headquarters are located in Gardena, California, an industrial manufacturing area located Midway between the port of Los Angeles and Los Angeles City, twenty minutes from the Los Angeles International Airport and ten minutes away from the port of Los Angeles. Corporate Headquarters lodge manufacturing facilities and research laboratories, making the company basically self-sufficient in the total implementation of product quality control and most new projects.

            <br />

            Two manufacturing facilities with one served by rail road that includes 5 powder production units with an annual capacity of 60 million pounds, with capacities to spray dry, vacuum dry and centrifuge.

            <br />

            The liquid production facility capabilities include exothermic and endothermic reactors, evaporation, extraction, emulsification, ammonation, esterification and reduction reaction (acid, alkaline) with a annual capacity exceeding 3.5 million gallons.


            <br />
            Over the last seven decades Grow More has evolved to its present status as a company, which solves problems through applied research. The strength created by the company results from the application of scientific methology. Constant achievement through applied research describes in brief the total commitment provided by Grow More products and personnel. This happens through quantitative analysis, and quality control. The high degree of professionalism, which exists at Grow More is prominent among the many reasons why customers continue to rely on the firm.</div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
