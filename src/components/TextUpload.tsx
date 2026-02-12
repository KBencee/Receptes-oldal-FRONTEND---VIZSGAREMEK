const TextUpload = ({
  ...props
}: {
  Click: () => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  length: number;
  setLength: (length: number) => void;
  lenghtUnit: string;
  setLenghtUnit: (lenghtUnit: string) => void;
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}) => {
  const addTag = () => {
    if (props.tags.length < 20) {
      props.setTags([...props.tags, "Címke"]);
    }
  };
  const handleTagEdit = (index: number, newValue: string) => {
    const updatedTags = [...props.tags];
    updatedTags[index] = newValue;
    props.setTags(updatedTags);
  };
  return (
    <div id="textContDiv">
      <form id="textCont">
        <input
          type="text"
          id="setName"
          placeholder="Add meg a recepted nevét"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <div id="tagList">
          <div id="innerTagList">
            {props.tags.map((tag, index) => (
              <div
                key={index}
                className="tag"
                contentEditable
                suppressContentEditableWarning
                onInput={(e) => {
                  const text = e.currentTarget.textContent || "";
                  if (text.length > 16) {
                    e.currentTarget.textContent = text.slice(0, 16);
                    const range = document.createRange();
                    const sel = window.getSelection();
                    range.selectNodeContents(e.currentTarget);
                    range.collapse(false);
                    sel?.removeAllRanges();
                    sel?.addRange(range);
                  }
                }}
                onBlur={(e) =>
                  handleTagEdit(index, e.currentTarget.textContent || "")
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.currentTarget.blur();
                  }
                }}
              >
                {tag}
              </div>
            ))}
            <div
              className={props.tags.length < 10 ? "tag" : "fOff"}
              onClick={addTag}
              id="plusButton"
            >
              +
            </div>
          </div>
        </div>
        <textarea
          id="setDescription"
          placeholder="Írd le a receptedet"
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
        ></textarea>
        <div id="diffLenDiv">
          <div id="diffDiv">
            <label htmlFor="diffSelect">Mennyire nehéz?</label>
            <select
              name="diffSelect"
              id="diffSelect"
              value={props.difficulty}
              onChange={(e) => props.setDifficulty(e.target.value)}
            >
              <option value="-" hidden>
                Válassz
              </option>
              <option value="Könnyű">Könnyű</option>
              <option value="Közepes">Közepes</option>
              <option value="Nehéz">Nehéz</option>
            </select>
          </div>
          <div id="lenDiv">
            <label htmlFor="lenSelect">Mennyi idő?</label>
            <div id="lenInline">
              <input
                type="number"
                id="lenSelect"
                value={props.length}
                maxLength={2}
                onChange={(e) => props.setLength(Number(e.target.value))}
              />

              <select
                name="lenUnitSel"
                id="lenUnitSel"
                value={props.lenghtUnit}
                onChange={(e) => props.setLenghtUnit(e.target.value)}
              >
                <option value="Min">perc</option>
                <option value="Hour">óra</option>
              </select>
            </div>
          </div>
        </div>
        <input type="button" value="Feltöltés" onClick={props.Click} className="submitButton"/>
      </form>
    </div>
  );
};

export default TextUpload;
