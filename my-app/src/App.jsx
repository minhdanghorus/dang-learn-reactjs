import React from "react";
import ModalBase from "./components/modal/ModalBase";
import ModalAdvanced from "./components/modal/ModalAdvanced";

const App = () => {
  const [openModalBase, setOpenModalBase] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div className="p-5">
      <button
        className="p-5 text-white rounded-lg text-center bg-blue-500"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-5 text-white rounded-lg text-center bg-blue-500 ml-5"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>

      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[320px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
          assumenda repudiandae tenetur quis amet officia recusandae mollitia
          porro ut nemo dolor? Quisquam, soluta inventore culpa iste doloribus
          labore omnis repellendus.
        </div>
      </ModalBase>
      <ModalAdvanced visible={openModal} heading="Welcome back" onClose={() => setOpenModal(false)} bodyClassName="w-full max-w-[400px]">
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvanced>
    </div>
  );
};

export default App;
