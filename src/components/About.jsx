import images from "../utils/images";

const About = () => {
  return (
    <div>
      <div>
        <div className="relative flex-shrink-0"><img src={images.aboutmain} alt="" />
          <div className='inset-0 absolute top-9  left-0 ml-[150px] flex items-center justify-center bg-[#3D9BE9]  h-[65px] w-[331px]'>
            <h2 className='text-2xl tracking-widest font-thin text-white'>The Grow More Version</h2>
          </div>
        </div>
        <div className='flex flex-row items-center justify-evenly p-8'>
          <div className='w-[279px] h-[326px]'><img className='' src={images.aboutside} alt="" /></div>
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
    </div >
  )
}
export default About;