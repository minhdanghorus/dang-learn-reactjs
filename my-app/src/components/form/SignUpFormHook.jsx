import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaValidation = yup
  .object({
    firstName: yup
      .string()
      .required("This field is required")
      .max(15, "Must be 15 characters or less"),
    lastName: yup.string().required("This field is required"),
  })
  .required();

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  console.log("errors: ", errors);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 15,
          // })}
          {...register("firstName")}
        />
        {/* {errors.firstName && errors.firstName.type === "required" && (
          <div className="text-red-500 text-sm">This field is required</div>
        )}
        {errors.firstName && errors.firstName.type === "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 15 characters or less
          </div>
        )} */}
        {errors?.firstName?.message && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email Address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="intro">Intro yourself</label>
        <textarea
          id="intro"
          placeholder="Enter your introduce"
          className="p-4 rounded-md border border-gray-100"
        ></textarea>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="job">Select your job</label>
        <select id="job" className="p-4 rounded-md border border-gray-100">
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label className="flex items-center gap-2 mb-5">
          <input type="checkbox" id="term" />
          <label htmlFor="term">I accept the terms and conditions</label>
        </label>
      </div>
      <div>
        <button
          type="submit"
          className=" w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
