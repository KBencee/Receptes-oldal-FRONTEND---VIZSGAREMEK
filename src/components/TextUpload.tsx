



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
    if (props.tags.length < 4) {
      props.setTags([...props.tags, "Új címke"]);
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
          {props.tags.map((tag, index) => (
            <div
              key={index}
              className="tag"
              contentEditable
              suppressContentEditableWarning
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
            className={props.tags.length < 4 ? "tag" : "fOff"}
            onClick={addTag}
            id="plusButton"
          >
            +
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
              <option value="Válassz" hidden>
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
                type="text"
                id="lenSelect"
                value={props.length}
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
        <input type="button" value="Feltöltés" onClick={props.Click} />
      </form>
    </div>
  );
};

export default TextUpload;
