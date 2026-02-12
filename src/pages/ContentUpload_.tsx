import { useContext, useRef, useState } from "react";
import ImageUpload from "../components/ImageUpload";
import TextUpload from "../components/TextUpload";
import apitest from "../services/postUpload";
import Navbar from "../components/Navbar";
import type { ContentType } from "../types/ContentType";
import { useMobileContext } from "../context/MobileContextProvider";


function ContentUpload_() {

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const [lenghtUnit, setLenghtUnit] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [tags, setTags] = useState<string[]>(["Cimke"]);
  const [image, setImage] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState<string>("");
  const {isMobile} = useMobileContext();

  const uploadBtn_Click = async () => {
    let trueLength: number = length;
    if (lenghtUnit == "Hour") {
      trueLength = length * 60;
    }
    let temp: ContentType = {
      title: title,
      id: Math.floor(Math.random() * 10000),
      uploader: "currentUser",
      uploadTime: new Date(),
      description: description,
      image: image ?? "",
      length: trueLength,
      difficulty: difficulty,
      tags: tags,
      ingredients: ingredients,
    };
    console.log(temp);
    apitest(temp);
  };

  return (
    <>
      <Navbar/>
      <div id={isMobile ? "contentUploadMobile" : "contentUpload"}>
        <ImageUpload 
        image={image}
        setImage={setImage}
        />
        <TextUpload
          Click={uploadBtn_Click}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          length={length}
          setLength={setLength}
          lenghtUnit={lenghtUnit}
          setLenghtUnit={setLenghtUnit}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          tags={tags}
          setTags={setTags}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      </div>
    </>
  );
}

export default ContentUpload_;
