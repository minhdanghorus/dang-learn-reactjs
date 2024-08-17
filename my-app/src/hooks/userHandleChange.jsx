import React from "react";

export default function userHandleChange(initialValues) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return { values, handleChange };
}
