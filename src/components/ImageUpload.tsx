import { useState } from "react";


const ImageUpload = ({
  ...props
}: {
  image: File | null
  setImage: (image: File | null) => void
 }) => {
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
          style={{ display: "none" }}
          accept="image/png, image/jpeg"
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              const file = files[0];
              const objectUrl = URL.createObjectURL(file);
              setImagePath(objectUrl);
              setFileSelected(true);
              if (props.setImage) props.setImage(file);
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
