"use client"; 
import { EmptyBDForm } from "emptybd-form";

export default function page() {
  return (
    <div>
      <EmptyBDForm
        dataKey="112233445566"
        styles={{
          button: {
            backgroundColor: "#000",
            color: "#FFF",
            borderRadius: "20px",
          },
        }}
      />
    </div>
  );
}

// "use client";
// import { useState } from "react";

// export default function EmbedField() {
//   const [textValue, setTextValue] = useState("");
//   const [emailValue, setEmailValue] = useState("");

//   const handleSubmit = async () => {
//     if (!textValue.trim() || !emailValue.trim()) {
//       alert("Please fill both fields");
//       return;
//     }

//     // Send to parent (optional)
//     window.parent.postMessage(
//       {
//         type: "myEmbeddedField",
//         data: { text: textValue.trim(), email: emailValue.trim() },
//       },
//       "*" // replace with specific origin in production
//     );

//     // Send directly to my server
//     try {
//       const res = await fetch("http://localhost:3000/api/collect", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           text: textValue.trim(),
//           email: emailValue.trim(),
//         }),
//       });
//       const json = await res.json();
//       console.log("Embed API response:", json);
//     } catch (err) {
//       console.error("Embed submit error:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen">

//     <div style={{ padding: "10px", minHeight: "100vh" }}>
//       <input
//         type="text"
//         placeholder="Enter text"
//         value={textValue}
//         onChange={(e) => setTextValue(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "10px",
//           borderRadius: "6px",
//           border: "1px solid #ccc",
//           marginBottom: "10px",
//         }}
//       />
//       <input
//         type="email"
//         placeholder="Enter email"
//         value={emailValue}
//         onChange={(e) => setEmailValue(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "10px",
//           borderRadius: "6px",
//           border: "1px solid #ccc",
//           marginBottom: "10px",
//         }}
//       />
//       <button
//         onClick={handleSubmit}
//         style={{
//           padding: "8px 16px",
//           borderRadius: "6px",
//           background: "#0066ff",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Submit from Embed
//       </button>
//     </div>
//     </div>
//   );
// }
