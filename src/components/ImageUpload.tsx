import { useState } from "react";

const ImageUpload = () => {
  const [imagePath, setImagePath] = useState<string>("");
  return (
    <div
      id="imageUploadDiv"
      onClick={() => document.getElementById("imageUpload")?.click()}
    >
      <p>Kattints ide a kép feltöltéséhez</p>
      <input
        type="file"
        id="imageUpload"
        // accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImagePath(file.name);
            console.log(file.name);
          }
        }}
      />
    </div>
  );
};

export default ImageUpload;
