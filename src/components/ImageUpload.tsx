import { useState } from "react";

const ImageUpload = () => {
  const [imagePath, setImagePath] = useState<string>("");
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  return (
    <div
      className={`imageUploadDiv ${fileSelected ? "has-file" : ""}`}
      onClick={() => document.getElementById("imageUpload")?.click()}
    >
      <div style={{ display: fileSelected ? "none" : "block" }}>
        <p>Kattints ide a kép feltöltéséhez</p>
        <input
          type="file"
          id="imageUpload"
          // accept="image/png, image/jpeg"
          style={{ display: "none" }}
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              const file = files[0];
              const objectUrl = URL.createObjectURL(file);
              setImagePath(objectUrl);
              setFileSelected(true);
            }
          }}
        />
      </div>
      <img
        src={imagePath}
        alt="Preview"
        id="imagePreview"
        style={{ display: fileSelected ? "block" : "none" }}
      />
    </div>
  );
};

export default ImageUpload;
