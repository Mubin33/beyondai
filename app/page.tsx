import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}



// 'use client'
// import { useEffect, useState } from "react";
 

// interface DynamicFormProps {
//   dataKey: string;  
//   style?: string;  
// }

// const DynamicForm: React.FC<DynamicFormProps> = ({ dataKey, style }) => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [apiData, setApiData] = useState<any>(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${dataKey}`);
//         const data = await res.json();
//         setApiData(data);
//       } catch (error) {
//         console.error("API Fetch Error:", error);
//       }
//     };

//     if (dataKey) {
//       fetchData();
//     }
//   }, [dataKey]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <div className={`max-w-xl mx-auto p-6 rounded-2xl shadow-lg bg-white ${style || ""}`}>
//       <h2 className="text-2xl font-semibold mb-4">Dynamic Form</h2>

//       {apiData && (
//         <div className="mb-4 p-3 bg-gray-100 rounded-lg text-sm">
//           <p className="font-medium">Fetched Data:</p>
//           <pre className="text-xs overflow-x-auto">{JSON.stringify(apiData, null, 2)}</pre>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Message</label>
//           <textarea
//             name="message"
//             rows={4}
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           />
//         </div>

//         <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DynamicForm;