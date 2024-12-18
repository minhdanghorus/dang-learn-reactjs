import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

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
    watch,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    // reset,
    // resetField,
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  const watchShowAge = watch("showAge", false);

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  console.log("errors: ", errors);
  console.log("isDirty: ", isDirty);
  console.log("dirtyFields: ", dirtyFields);
  const onSubmit = async (data) => {
    if (isValid) {
      console.log("send data to backend: ", data);
    }
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // )
    // console.log("response: ", response);

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log("data: ", data);
    //   }, 5000);
    // });

    // reset({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   showAge: false,
    // });

    // resetField("firstName");
  };

  const handleSetDemoData = () => {
    setValue("firstName", "Đăng");
    setValue("lastName", "Nguyễn");
    setValue("email", "dang@gmail.com");
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
        {errors?.lastName?.message && (
          <div className="text-red-500 text-sm">{errors.lastName.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email</label>
        <MyInput
          name="email"
          placeholder="Enter your Email Address"
          id="email"
          type="email"
          control={control}
        />
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your Email Address"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
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
          {isSubmitting ? (
            <div className=" mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
        <button
          className=" p-3 bg-green-500 text-white mt-2 rounded-lg"
          onClick={handleSetDemoData}
        >
          Demo Data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue={""}
//       render={({ field }) => (
//         <input className="p-4 rounded-md border border-gray-100" {...field} {...props}/>
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name, defaultValue: "" });
  console.log("field: ", field);
  return (
    <input
      className="p-4 rounded-md border border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
