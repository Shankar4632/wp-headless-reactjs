// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    axios
      .post(`${process.env.REACT_APP_API_AUTH}`, {
        username: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200 && response.statusText === "OK") {
          localStorage.setItem("user", JSON.stringify(response.data));
          alert("Successfull Added");
        }
        // Additional logic for successful login, if needed
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle and display error to the user
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <form className="grid grid-flow-row gap-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-10 py-4 text-black"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="px-10 py-4 text-black"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className="bg-blue-400 p-3 rounded-lg" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Form;
