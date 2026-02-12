import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuItems, setActive } from "./NavMiddle";

const UploadAlert = () => {
    const navigate = useNavigate()
    const goToOwn = () => {
            navigate("/")
            setActive(menuItems[2].name)
        }
  return (
    <div id="UploadAlertBox">
      <p>Recepted feltöltése sikeres!</p>
      <Link to="/own"><input type="button" value="Tovább" /> </Link>
    </div>
  );
};

export default UploadAlert;
