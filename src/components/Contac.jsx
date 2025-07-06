import images from "../utils/images"

export default function () {
  return (

    <div>
      <div className="relative flex-shrink-0">
        <img src={images.career} alt="" />
        <div className=" absolute top-11 left-[170px] text-2xl bg-[#3D9BE9] text-white py-2 px-[70px] tracking-wide font-thin">Careers</div>
      </div>
      <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left: Form Section */}
        <div className="w-full md:w-2/3 font-thin">
          <h2 className="text-lg text-gray-800">
            Thank you for your interest in Grow More
          </h2>
          <p className="text-lg text-gray-600 mt-1">To contact us, please fill out the form:</p>

          {/* Form */}
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none hover:focus:ring-1 hover:focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-500 p-2 outline-none hover:focus:ring-1 hover:focus:ring-black"
            />
            <input
              type="tel"
              placeholder="Phone"
              required
              className="w-full border border-gray-500 p-2  outline-none hover:focus:ring-1 hover:focus:ring-black"
            />
            <textarea
              placeholder="Type your message here..."
              rows="4"
              required
              className="w-full border border-gray-500 p-2 outline-none hover:focus:ring-1 hover:focus:ring-black"
            ></textarea>

            {/* reCAPTCHA Placeholder */}
            <div className="flex-row  p-4 space-x-60  flex items-center justify-center">
              <div>
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600 text-sm">I'm not a robot</span>
              </div>
              <div>
                <button className="bg-green-700 text-white px-10 py-2  w-full hover:bg-green-900 transition">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/3 text-center shadow-[-2px_0_0px_0]">
          <div className="pl-4 flex items-center flex-col font-thin">
            <img
              src={images.careerside} // Replace with actual logo
              alt="Grow More Logo"
              className="mx-auto md:mx-0"
            />

            <p className="text-gray-700 mt-4">15600 New Century Drive,</p>
            <p className="text-gray-700">Gardena, CA, 90248 U.S.A.</p>

            <p className="mt-2 text-gray-700">
              Tel:{" "}
              <a href="tel:8013484110" className="text-blue-500 hover:underline">
                (811) 338-2860
              </a>
            </p>
            <p className="text-gray-700">
              Fax: (301) 515-4297
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}