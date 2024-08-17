import React from "react";
import userHandleChange from "../../hooks/userHandleChange";

const Form = () => {
  // const [fullname, setFullname] = React.useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // const [message, setMessage] = React.useState("");
  // const [country, setCountry] = React.useState("");

  // const handleInputchange = (e) => {
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };

  // const handleInputchange = (e) => {
  //   const type = e.target.type;
  //   setFullname({
  //     ...fullname,
  //     [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   });
  // };
  const {values, handleChange} = userHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  console.log("values: ", values);
  

  return (
    <div className=" p-5">
      <div className="flex gap-x-5">
        <input
          type="text"
          name="fullname"
          className=" w-full max-w-[300px] p-5 border border-gray-300 rounded-lg"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className=" w-full max-w-[300px] p-5 border border-gray-300 rounded-lg"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input type="checkbox" name="hobby" onChange={handleChange} />
      </div>
      {/* {message}
      <textarea
        name="message"
        className="w-full max-w-[300px] p-5 border border-gray-300 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="vietnam">VN</option>
      </select> */}
    </div>
  );
};

export default Form;
