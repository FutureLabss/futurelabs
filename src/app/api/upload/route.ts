import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  try {
    // Parse the form data
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!(file instanceof Blob)) {
      return NextResponse.json({ message: "Invalid or missing file" }, { status: 400 });
    }

    // Validate environment variables
    const { REACT_APP_UPLOAD_PRESET, REACT_APP_CLOUD_NAME } = process.env;

    if (!REACT_APP_UPLOAD_PRESET || !REACT_APP_CLOUD_NAME) {
      return NextResponse.json(
        { message: "Cloudinary configuration is missing" },
        { status: 500 }
      );
    }

    // Construct Cloudinary upload form data
    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", file);
    cloudinaryFormData.append("upload_preset", REACT_APP_UPLOAD_PRESET);

    // Send the file to Cloudinary
    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: cloudinaryFormData,
      }
    );

    if (!cloudinaryResponse.ok) {
      const error = await cloudinaryResponse.json();
      throw new Error(error.error?.message || "Failed to upload file to Cloudinary");
    }

    const data = await cloudinaryResponse.json();
    console.log(data);


    if (!data.secure_url) {
      throw new Error("Upload succeeded, but secure_url is missing");
    }

    // Return the uploaded file's URL
    return NextResponse.json({ url: data.secure_url }, { status: 200 });

  } catch (error) {
    console.log("Cloudinary upload error:", error);
    return NextResponse.json(
      { message: "Failed to upload file", error: error || "Unknown error" },
      { status: 500 }
    );
  }
}
