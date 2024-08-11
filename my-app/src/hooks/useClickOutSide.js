import React from "react";

export function useClickOutSide(dom) {
  const [show, setShow] = React.useState(false);
  const node = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutSide = (e) => {
      console.log("e.target", e.target);
      if (node.current && !node.current.contains(e.target) && !e.target.matches(dom)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

    return { node, show, setShow };
}
