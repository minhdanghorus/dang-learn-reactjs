import React from "react";
import ModalBase from "./components/modal/ModalBase";

const App = () => {
  const [openModalBase, setOpenModalBase] = React.useState(false);
  return (
    <div className="p-5">
      <button
        className="p-5 text-white rounded-lg text-center bg-blue-500"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
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
    </div>
  );
};

export default App;
