import React, { useState } from "react";
import "../index.css";
import "./form.css";
import Display from "./display";

const Form = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [data, setData] = useState([]);
  const [dispaly, setDisplay] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    data.push({
        name: name,
        dept: department,
        rate: rating
    });

    setData(data);
    setDisplay(!dispaly)

    setName("");
    setDepartment("");
    setRating("");
  };

  const handleDisplay = () => {
      setDisplay((toggle) => !toggle);
  }

  return (
    <div>
      {dispaly ? (
        <div>
          <h2>EMPLOYEE FEEDBACK FORM</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <br />

            <label htmlFor="department">Department :</label>
            <input
              type="text"
              name="department"
              id="department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              required
            />
            <br />

            <label htmlFor="rating">Rating :</label>
            <input
              type="number"
              name="rating"
              id="rating"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              required
            />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <Display handleData={data} handleDisplay={handleDisplay}/>
      )}
    </div>
  );
};

export default Form;
