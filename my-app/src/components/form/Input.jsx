import React from "react";

const Input = () => {
  const [fullname, setFullname] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleInputchange = (e) => {
    setFullname(e.target.value);
  };
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSelectChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className=" p-5">
      {fullname}
      <input
        type="text"
        name="fullname"
        className=" w-full max-w-[300px] p-5 border border-gray-300 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputchange}
      />
      {message}
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
      </select>
    </div>
  );
};

export default Input;
