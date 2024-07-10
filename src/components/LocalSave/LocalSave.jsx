import React, { useState, useEffect } from "react";

function LocalSave() {
  const [fieldData, setFieldData] = useState({
    name:'',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const prevData = localStorage.getItem("LocalSave");
    if (prevData) {
      console.log('fromLocalStorage: ', JSON.parse(prevData))
      setFieldData(JSON.parse(prevData));
    }
  }, []);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFieldData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("LocalSave", JSON.stringify(fieldData));
    console.log("Data saved to localStorage:", fieldData);


  };

  return (
    <div className="playground-container">
      Playground
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div>
          <label>Name: </label>
          <input value={fieldData.name} type='text' name='name' onChange={handleChange}/>
        </div>
        
        {/* phone */}
        <div>
          <label>Phone: </label>
          <input value={fieldData.phone} type='text' name='phone' onChange={handleChange}/>
        </div>

        {/* email */}
        <div>
          <label>Email: </label>
          <input value={fieldData.email} type='text' name='email' onChange={handleChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div className="input-field"></div>
    </div>
  );
}

export default LocalSave;
