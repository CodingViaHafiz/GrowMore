// // // // // export default function () {

// // // // import { useState } from "react"

// // // // //   const names = ["Abuzer", "Abdur Rehman", "Akbar", "Abdullah", "Asghar", "Mehdi",]
// // // // //   return (
// // // // //     <div>{names.slice(0, 5).filter((item) => (item.length > 7)).map((i, idx) => { return <div>{i}</div> })}</div>

// // // // //   )
// // // // // }

// // // // export default function () {

// // // //   const [num, setNum] = useState(0)

// // // //   const handleAdd = () => {
// // // //     setNum(num + 1)
// // // //   }
// // // //   const handleRemove = () => {
// // // //     if (num <= 0) {
// // // //       setNum(0)
// // // //     }
// // // //     else {
// // // //       setNum(num - 1)
// // // //     }
// // // //   }
// // // //   const handleReset = () => {
// // // //     setNum(0)
// // // //   }



// // // //   return (
// // // //     <div>
// // // //       <div className="flex items-center w-screen h-screen flex-col justify-center ">
// // // //         <p>count: {num}</p>
// // // //         <button onClick={handleAdd}>count +</button>
// // // //         <button onClick={handleRemove}>count -</button>
// // // //         <button onClick={handleReset}>reset</button>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }
// // // // //simulation and modeling
// // // // //system analysis and system classififcation
// // // // //model classification 




// import { useState, useEffect } from "react";
// // const users = ["Alice", "Bob", "Charlie", "David"]


// export default function LiveSearch() {
//   const [query, setQuery] = useState("")
//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
//       return setUsers(data), setLoading(false)
//     }).catch((error) => {
//       console.log(error)
//     })
//   }, [])


//   const filteredStudents = users.filter((item) => (
//     item.name.toLowerCase().includes(query.toLowerCase())
//   ))

//   return (
//     <div >
//       <div className="flex items-center justify-center flex-col ">
//         <input
//           className="p-2 border"
//           onChange={(e) => setQuery(e.target.value)}
//           type="text" value={query} name="" id="" placeholder="search student by name" />

//         <ul className="mt-4 ">
//           {query && filteredStudents.map((item, idx) => {
//             return <li className=" border-b-2" key={idx}>{item.name}</li>
//           })}
//         </ul>
//       </div>

//     </div>
//   )
// }


import { motion } from "framer-motion";
export default function DragMe() {
  return (
    <div className="flex h-screen items-center justify-center">
      <motion.button className="h-10 w-20 bg-blue-300 rounded-xl"
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      >
        Drag Me
      </motion.button>
    </div>
  )
}