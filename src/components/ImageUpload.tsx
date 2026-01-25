const ImageUpload = () => {
  return (
    <div
      id="imageUploadDiv"
      onClick={() => document.getElementById("imageUpload")?.click()}
    >
      <p>Kattints ide a kép feltöltéséhez</p>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;
