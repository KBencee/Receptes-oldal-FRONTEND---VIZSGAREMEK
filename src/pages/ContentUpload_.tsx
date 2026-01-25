import { useRef, useState } from "react";
import ImageUpload from "../components/ImageUpload";
import TextUpload from "../components/TextUpload";
import type { ContentType } from "../types/ContentType";

function ContentUpload_() {
  const [newPost, setNewPost] = useState<ContentType>({
    title: "",
    id: Math.floor(Math.random() * 10000),
    uploader: "currentUser",
    description: "",
    tag: "",
    image: "",
    lenght: 0,
    difficulty: ""
  })

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  // const tagRef = useRef<HTMLInputElement>(null);
  const lengthRef = useRef<HTMLInputElement>(null);
  const difficultyRef = useRef<HTMLSelectElement>(null);
  
  const uploadBtn_Click = () => {
    const title = titleRef.current?.value || "";
    const description = descriptionRef.current?.value || "";
    // const tag = tagRef.current?.value || "";
    const length = parseInt(lengthRef.current?.value || "0", 10);
    const difficulty = difficultyRef.current?.value || "";
    setNewPost({
      title: title,
      description: description,
      lenght: length,
      difficulty: difficulty,
      id: newPost.id,
      uploader: newPost.uploader,
      tag: newPost.tag,
      image: newPost.image
    });
  }


  return (
    <div id="contentUpload">
      <ImageUpload />
      <TextUpload Click={uploadBtn_Click}/>
    </div>
  );
}

export default ContentUpload_;
