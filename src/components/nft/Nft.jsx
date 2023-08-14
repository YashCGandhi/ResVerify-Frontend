import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ClearIcon from "@mui/icons-material/Clear";
import "./Nft.css";

const Nft = () => {
  const [rawData, setRawData] = useState([
    {
      accreditation: {
        education: "PhD in Computer Science and Engineering",
        input_str: "PhD in Computer Science and Engineering",
        match_str: "",
      },
      dates: {
        completion_date: "2021-09-01",
        is_current: false,
        raw_text: "Sep 2021- Aug 2027 (Exp)",
      },
      grade: { metric: "GPA", raw: "GPA: 3.52/4.00", value: "3.52/4.00" },
      id: 30146059,
      location: {
        city: "Santa Cruz",
        country: "United States",
        country_code: "US",
        formatted: "Santa Cruz, CA, USA",
        latitude: 36.9741171,
        longitude: -122.0307963,
        raw_input: "Santa Cruz",
        state: "California",
      },
      organization: "University of California",
    },
    {
      accreditation: {
        education: "Bachelor of Engineering",
        education_level: "bachelors",
        input_str: "Bachelor of Engineering in Computer Engineering",
        match_str: "",
      },
      dates: {
        completion_date: "2021-06-01",
        is_current: false,
        raw_text: "Aug 2017 - Jun 2021",
        start_date: "2017-08-01",
      },
      grade: { metric: "CGPA", raw: "CGPA: 8.26/10.00", value: "8.26/10.00" },
      id: 30146060,
      organization:
        "K.J Somaiya Institute of Engineering & I.T, University of Mumbai",
    },
  ]);

  const [formData, setFormData] = useState([
    { key: "lasjdflka;sjfl;asjdflak", value: "Initial Value" },
    { key: "Author", value: "John Doe" },
    { key: "Date", value: "2022-08-12" },
    { key: "Date", value: "2022-08-12" },
  ]);

  const rawToFormData = (rawD) => {
    const formArray = [];
    rawD.forEach((obj) => {
      const org = obj["organization"];
      const randomToken = Math.random();
      formArray.push({ key: org, value: randomToken });
    });
    console.log(formArray);
    setFormData(formArray);
  };
  useEffect(() => {
    rawToFormData(rawData);
  }, [rawData]);
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
