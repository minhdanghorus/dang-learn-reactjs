import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        tern: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        tern: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <Field
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100"
            name="firstName"
          ></Field>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName" />
          </div>
          <label htmlFor="lastName">Lastname</label>
          <Field
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email Address</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Intro yourself</label>
          <Field
            type="intro"
            placeholder="Enter your introduce"
            className="p-4 rounded-md border border-gray-100 h-[150px] resize-none"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your job</label>
          <Field
            type="job"
            className="p-4 rounded-md border border-gray-100"
            as="select"
          >
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job" />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            type="checkbox"
            className="p-4 rounded-md border border-gray-100"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms" />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className=" w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
