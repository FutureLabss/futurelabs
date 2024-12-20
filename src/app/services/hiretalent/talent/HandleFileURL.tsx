// "use client"

// import { useState } from "react";

// export default async function HandleFileURL({ file }) {

//   // const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [fileUrl, setFileUrl] = useState(null);

//   console.log(error);


//   console.log(fileUrl);


//   try {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
//     console.log("preset", process.env.REACT_APP_UPLOAD_PRESET);

//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (res.ok) {
//       const data = await res.json();
//       setFileUrl(data.url);

//       return fileUrl


//     } else {
//       setError("File upload failed");

//     }
//   } catch (error: unknown) {
//     setError(error instanceof Error ? error.message : "Unknown error");
//     console.log(error);


//   }

//   // console.log(Array.from(formData.entries()));
// }






