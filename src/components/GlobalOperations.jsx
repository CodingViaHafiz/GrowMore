import images from "../utils/images"

export default function () {
  return (
    <div>
      <div className="relative flex-shrink-0">
        <img src={images.aboutglobal} alt="" />
        <div className="absolute top-[38%] left-28 text-white text-3xl font-thin">About Us: Global Operations</div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 font-thin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* North America */}
          <div>
            <h2 className="font-semibold text-lg">North America</h2>
            <h3 className="font-semibold">Office and Warehouse</h3>
            <ul className="list-disc pl-5">
              <li>Arizona</li>
              <li>California</li>
              <li>Washington</li>
              <li>Oregon</li>
              <li>Utah</li>
              <li>Texas</li>
              <li>New Mexico</li>
            </ul>
          </div>

          {/* Middle and Near East */}
          <div>
            <h2 className="font-semibold text-lg">Middle and Near East</h2>
            <ul className="list-disc pl-5">
              <li>Turkey</li>
              <li>Syria</li>
              <li>Lebanon</li>
              <li>Jordan</li>
              <li>United Arab Emirates</li>
              <li>Oman</li>
              <li>Pakistan</li>
              <li>India</li>
              <li>Sri Lanka</li>
            </ul>
          </div>

          {/* Central and South America */}
          <div>
            <h2 className="font-semibold text-lg">Central and South America</h2>
            <h3 className="font-semibold">Office and Warehouse</h3>
            <ul className="list-disc pl-5">
              <li>Costa Rica</li>
              <li>San Juan</li>
              <li>Ecuador</li>
              <li>Quito, Guayaquil</li>
              <li>Venezuela</li>
              <li>Caracas</li>
              <li>Peru</li>
              <li>Lima</li>
              <li>Chile</li>
              <li>Santiago</li>
              <li>Africa</li>
              <li>Cameroon</li>
            </ul>
          </div>

          {/* Europe */}
          <div>
            <h2 className="font-semibold text-lg">Europe</h2>

            <h3 className="font-semibold">Italy</h3>
            <h4 className="font-semibold">Commercial Offices:</h4>
            <ul className="list-disc pl-5">
              <li>Arezzo</li>
            </ul>

            <h4 className="font-semibold">Warehouses:</h4>
            <ul className="list-disc pl-5">
              <li>Bologna</li>
              <li>Naples</li>
              <li>Palermo</li>
            </ul>

            <h3 className="font-semibold mt-3">Greece</h3>
            <h4 className="font-semibold">Commercial Offices:</h4>
            <ul className="list-disc pl-5">
              <li>Athens</li>
            </ul>

            <h4 className="font-semibold">Warehouses:</h4>
            <ul className="list-disc pl-5">
              <li>Athens</li>
              <li>Salonika</li>
            </ul>
          </div>

          {/* Southeast Asia */}
          <div>
            <h2 className="font-semibold text-lg">Southeast Asia</h2>
            <ul className="list-disc pl-5">
              <li>Vietnam</li>
              <li>Indonesia</li>
              <li>Malaysia</li>
              <li>Thailand</li>
              <li>Philippines</li>
            </ul>
          </div>

          {/* Asia */}
          <div>
            <h2 className="font-semibold text-lg">Asia</h2>
            <ul className="list-disc pl-5">
              <li>Japan</li>
              <li>Taiwan</li>
              <li>China</li>
              <li>Korea</li>
              <li>Tahiti</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}