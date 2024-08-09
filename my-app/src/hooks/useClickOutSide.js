import React from "react";

export function useClickOutSide() {
  const [show, setShow] = React.useState(false);
  const node = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutDropdown = (e) => {
      console.log("e.target", e.target);
      if (node.current && !node.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutDropdown);

    return () => {
      document.removeEventListener("click", handleClickOutDropdown);
    };
  }, []);

    return { node, show, setShow };
}
