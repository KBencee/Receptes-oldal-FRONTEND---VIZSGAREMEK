type uploadBtnProp = {
  Click: () => void;
};

import React, { useRef } from "react";

const TextUpload = ({ Click }: uploadBtnProp) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div id="textContDiv">
      <form id="textCont">
        <input
          type="text"
          id="setName"
          placeholder="Add meg a recepted nevét"
          ref={titleRef}
        />
        <div id="tagList">
          <div className="tag">
            Tag
          </div>
        </div>
        <textarea
          id="setDescription"
          placeholder="Írd le a receptedet"
          ref={descriptionRef}
        ></textarea>
        <div id="diffLenDiv">
          <div id="diffDiv">
            <label htmlFor="diffSelect">Mennyire nehéz?</label>
            <select name="diffSelect" id="diffSelect">
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
              <input type="text" id="lenSelect" />
              <select name="lenUnitSel" id="lenUnitSel">
                <option value="Min">perc</option>
                <option value="Hour">óra</option>
              </select>
            </div>
          </div>
        </div>
        <input type="button" value="Feltöltés" onClick={Click} />
      </form>
    </div>
  );
};

export default TextUpload;
