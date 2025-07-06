import { Link } from "react-router-dom";
import images from "../utils/images";
const categories = [
  "Hobby Market Residential",
  "Foliar Nutrients",
  "Fertilizers",
  "Micronutrients",
  "Specialty Products",
  "Adjuvants",
  "Humic Acid / Organic Acid",
];

export default function () {
  return (
    <div>
      <div className="relative flex-shrink-0">
        <img src={images.innovationmain} alt="" />
        <div className=" absolute top-11 left-[170px] text-3xl bg-[#3D9BE9] text-white p-3 font-thin">Innovation In Products</div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-start p-6 max-w-6xl mx-auto">
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
          </div>

          {/* Content */}
          <div className="w-full md:w-3/4 md:pl-6 space-y-2">
            <p className="text-gray-700">
              Grow More, Inc. provides an extensive product line for a variety of
              markets worldwide. Constant achievement through applied research has
              been our motto since 1918 and provides the basis for the dedicated
              product quality and consumer preference.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Grow More is ranked number one as the brand consumers prefer in over 30 countries.</li>
              <li>Worldwide Distribution</li>
              <li>Leading experts in agriculture, horticulture, floriculture and hydroponics.</li>
              <li>Guaranteed customer satisfaction.</li>
              <li>Superior technology.</li>
              <li>Optimal production facility.</li>
              <li>Service through the product life cycle.</li>
            </ul>
            <h3 className="text-[#3D9BE9] text-xl">Products by Type:</h3>
            <p>For example: water soluble fertilizer, foliar fertilizer, bio pesticides, amino acid, fertigation, organic fertilizer or micronutrients.</p>
            <h3 className="text-[#3D9BE9] text-xl">Products by Industry:</h3>
            <p>For example: Agriculture, Greenhouse Nursery, Vegetable Grower, Hydroseeding, Orchid Grower, or Water Treatment.</p>
            <h3 className="text-[#3D9BE9] text-xl">A Standard of Excellence</h3>
            <p>One of our goals at Grow More, Inc is to improve people's lives and the environment with high quality agricultural and horticultural products and science-based solutions.



              We place a high value in protecting the health and safety of the environment, our employees, growers and applicators in the communities in which we operate.</p>
            <h3 className="text-[#3D9BE9] text-xl">We are committed to:</h3>
            <li>Continually improving health, safety and the environmental performance.</li>
            <li>Listen and respond to concerns.</li>
            <li>Assist other companies in the industry to achieve optimum performance.</li>
          </div>

          {/* Image */}
          <div className="hidden md:block md:w-1/4 pl-6 relative">
            <div className="relative">
              <img
                src={images.innovationside}
                alt="Plants in laboratory"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute left-0 right-0 -bottom-3 h-4 bg-gray-800 blur-md opacity-50 rounded-full mx-auto w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}