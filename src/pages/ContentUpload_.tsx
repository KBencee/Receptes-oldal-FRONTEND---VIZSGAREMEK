const ContentUpload_ = () => {
  return (
    <div id="contentUpload">
      <div
        id="leftContDiv"
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
      <div id="rightContDiv">
        <form id="rightCont">
          <input
            type="text"
            id="setName"
            placeholder="Add meg a recepted nevét"
          />
          <div id="tagList">
            <div className="tag">Tag</div>
          </div>
          <textarea
            id="setDescription"
            placeholder="Írd le a receptedet"
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
          <input type="submit" value="Feltöltés" />
        </form>
      </div>
    </div>
  );
};

export default ContentUpload_;
