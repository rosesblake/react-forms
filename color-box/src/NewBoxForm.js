import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { color: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Box</h1>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        onChange={handleChange}
        value={formData.color}
        placeholder="color"
      />
      <br />
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        onChange={handleChange}
        value={formData.width}
        placeholder="pixels"
      />
      <br />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        onChange={handleChange}
        value={formData.height}
        placeholder="pixels"
      />
      <br />

      <button>Create Box</button>
    </form>
  );
};

export default NewBoxForm;
