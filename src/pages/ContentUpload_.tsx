import { useRef, useState } from "react";
import ImageUpload from "../components/ImageUpload";
import TextUpload from "../components/TextUpload";
import type { ContentType } from "../types/ContentType";

function ContentUpload_() {
  const [newPost, setNewPost] = useState<ContentType>({
    title: "",
    id: Math.floor(Math.random() * 10000),
    uploader: "currentUser",
    uploadTime: new Date(),
    description: "",
    image: "",
    lenght: 0,
    difficulty: "",
    tags: []
  });

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const [lenghtUnit, setLenghtUnit] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  if (lenghtUnit == "óra") {
    setLength(length * 60);
  }

  const uploadBtn_Click = () => {
    let temp = {
      title: title,
      id: Math.floor(Math.random() * 10000),
      uploader: "currentUser",
      uploadTime: new Date(),
      description: description,
      image: "",
      lenght: length,
      difficulty: difficulty,
      tags: tags
    }
    setNewPost(temp);
    console.log(temp);
  };

  return (
    <div id="contentUpload">
      <ImageUpload />
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
      />
    </div>
  );
}

export default ContentUpload_;
