import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   }
  //   else if (values.firstName.length > 15) {
  //     errors.firstName = "Must be 15 characters or less";
  //   }

  //   if (!values.lastName) {
  //     errors.lastName = "Required";
  //   }
  //   else if (values.lastName.length > 15) {
  //     errors.lastName = "Must be 15 characters or less";
  //   }

  //   return errors;
  // }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  console.log("formik: ", formik);
  
  return (
    <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? <div className=" text-sm text-red-500 ">{formik.errors.firstName}</div> : null}
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? <div className=" text-sm text-red-500 ">{formik.errors.lastName}</div> : null}
      </div>
      <div>
        <button type="submit" className=" w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">Submit</button>
      </div>
    </form>
  );
};

export default SignUpForm;
