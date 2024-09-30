import React, { Fragment, useEffect } from "react";
import "./App.css";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
import CardTailwind from "./components/card/CardTailwind";
import CardList from "./components/card/CardList";
import Photos from "./components/photo/Photos";
import Counter from "./components/counter/Counter";
import Header from "./components/Header";
import Timer from "./components/Timer";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import StopWatch from "./components/StopWatch";
// import Input from "./components/Input";
import TextareaAutoResize from "./components/TextareaAutoResize";
import Dropdown from "./components/Dropdown";
import Blog from "./components/Blogs";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
import SidebarMenu from "./components/SidebarMenu";
import { useClickOutSide } from "./hooks/useClickOutSide";
import Form from "./components/form/Form";
import MovieSearchApp from "./components/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
import SignUpFormFinal from "./components/form/SignUpFormFinal";
import SignUpFormHook from "./components/form/SignUpFormHook";
import Modal from "./components/modal/Modal";
// import { GlobalStyles } from "./GlobalStyles";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: "#ff6bcb",
//   },
//   orange: "#ffa400",
// };

const App = () => {
  // const [show, setShow] = React.useState(false);
  // const {node, show, setShow } = useClickOutSide("button");
  const [showModal, setShowModal] = React.useState(false);
  return (
    // <div>
    //   {/* <Photos></Photos> */}
    //   {/* <Counter></Counter> */}
    //   {/* <Timer></Timer> */}
    //   {/* <Header></Header> */}
    //   {/* <Photos></Photos> */}
    //   {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
    //   {/* <StopWatch></StopWatch> */}
    //   {/* <Input></Input> */}
    //   {/* <TextareaAutoResize></TextareaAutoResize> */}
    //   {/* <button className=" inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer" onClick={() => {setShow(!show)}}>Show menu</button>
    //   <div className="p-5">
    //     <Dropdown></Dropdown>
    //   </div> */}
    //   {/* <Blog></Blog> */}
    //   {/* <button onClick={() => setShow(!show)}>Toggle</button>
    //   {show && <HackerNews></HackerNews>} */}
    //   {/* <HackerNewsWithHook></HackerNewsWithHook> */}
    //   {/* <SidebarMenu show={show} ref={node}></SidebarMenu> */}
    //   {/* <Form></Form> */}
    //   {/* <MovieSearchApp></MovieSearchApp> */}
    //   {/* <SignUpForm></SignUpForm> */}
    //   {/* <SignUpFormV2></SignUpFormV2> */}
    //   {/* <SignUpFormFinal></SignUpFormFinal> */}
    //   {/* <SignUpFormHook></SignUpFormHook> */}
    // </div>
    <Fragment>
      <div className="">
        <Modal open={showModal} handleClose={() => {setShowModal(false)}}></Modal>
      </div>
      <button
        className="button p-5 m-5 bg-blue-500 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Click me
      </button>
      <div className=" relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde
        excepturi dolorum dolores doloremque vitae repudiandae quae, itaque,
        neque nobis, enim adipisci inventore maiores quidem blanditiis cumque
        facere et voluptate?
      </div>
    </Fragment>
  );
};

export default App;
