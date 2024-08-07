import React from "react";

export default function useLinkNewTab() {
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (contentRef) {
      const links = contentRef.current.querySelectorAll("a");
      links.length > 0 &&
        links.forEach((link) => {
          link.setAttribute("target", "_blank");
        });
    }
  }, []);

  return { contentRef };
}
