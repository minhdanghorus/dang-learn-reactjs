import { set } from "lodash";
import React, { useEffect, useLayoutEffect } from "react";

const TextareaAutoResize = () => {
    const [text, setText] = React.useState("");
    const textareaRef = React.useRef(null);
    const [textareaHeight, setTextareaHeight] = React.useState("auto");
    // const [parentHeight, setParentHeight] = React.useState("auto");

    const handelChange = (e) => {
        setTextareaHeight("auto");
        setText(e.target.value);
    }

    useLayoutEffect(() => {
        // get scrollHeight of textarea
        const scrollHeight = textareaRef.current.scrollHeight;
        console.log("scrollHeight: ", scrollHeight);
        setTextareaHeight(`${scrollHeight}px`);
    }, [text]);

    console.log("component render");
  return (
    <div className=" p-5">
      <textarea
        className=" transition-all w-full max-w-[400px] overflow-hidden p-5 rounded-lg border border-gray-400 focus:border-blue-400 resize-none"
        placeholder="Please enter your content ..."
        value={text}
        ref={textareaRef}
        style={{
            height: textareaHeight,
        }}
        onChange={handelChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
