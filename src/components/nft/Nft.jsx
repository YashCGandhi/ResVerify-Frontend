import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import "./Nft.css";

const Nft = () => {
  const [formData, setFormData] = useState([
    { key: "lasjdflka;sjfl;asjdflak", value: "Initial Value" },
    { key: "Author", value: "John Doe" },
    { key: "Date", value: "2022-08-12" },
    { key: "Date", value: "2022-08-12" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = { ...updatedFormData[index], [name]: value };
    setFormData(updatedFormData);
  };

  const handleAddPair = () => {
    setFormData([...formData, { key: "", value: "" }]);
  };

  const handleRemovePair = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const hideShow = (id) => {
    const selectedInput = document.getElementById(id);
    if (selectedInput.type === "password") {
      selectedInput.type = "text";
    } else if (selectedInput.type === "text") {
      selectedInput.type = "password";
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        {formData.map((item, index) => (
          <div className="form-row" key={index}>
            <label className="form-label">
              <p>Organization:</p>
              <input
                type="text"
                name="key"
                value={item.key}
                onChange={(e) => handleChange(e, index)}
              />
              {/* <textarea
                type="text"
                name="key"
                value={item.key}
                onChange={(e) => handleChange(e, index)}
              ></textarea> */}
            </label>
            <label className="form-label">
              <p>Token:</p>
              <input
                id={index + "password"}
                type="password"
                name="value"
                value={item.value}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <div className="label-btn-container">
              <button
                type="button"
                onClick={() => hideShow(index + "password")}
              >
                <VisibilityIcon />
              </button>
              <button type="button" onClick={() => handleRemovePair(index)}>
                <ClearIcon />
              </button>
            </div>
          </div>
        ))}
        <div className="button-container">
          <button className="btn" type="button" onClick={handleAddPair}>
            Add Pair
          </button>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Nft;
