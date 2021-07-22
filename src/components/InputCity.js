import React, { useState } from 'react';

const InputCity = (props) => {

    const [city,setCity] = useState("");

    const getCityHandler = (event) => {
        setCity(event.target.value);
    }

    const submitHandler = (event) => {
        props.getCity(city);
    }

  return (
    <div className="input-group d-flex justify-content-center mt-5">
      <select
        className="custom-select w-50"
        id="inputGroupSelect04"
        aria-label="Example select with button addon"
        onChange={getCityHandler}
      >
        <option defaultValue>Choose a city...</option>
        <option value="0">Delhi</option>
        <option value="1">Kolkata</option>
        <option value="2">Mumbai</option>
      </select>
      <div className="input-group-append">
        <button onClick={submitHandler} className="btn btn-outline-secondary" type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputCity;
