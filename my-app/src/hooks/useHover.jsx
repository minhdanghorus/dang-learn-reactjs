import React from 'react';

export default function useHover() {
    const [hovered, setHovered] = React.useState(false);
    const nodeRef = React.useRef(null);

    React.useEffect(() => {
        const dom = nodeRef.current;
        function handleMouseOver() {
            setHovered(true);
          }
          function handleMouseOut() {
            setHovered(false);
          }
        if (dom) {
            dom.addEventListener('mouseenter', handleMouseOver);
            dom.addEventListener('mouseleave', handleMouseOut);

            return () => {
                dom.removeEventListener('mouseenter', handleMouseOver);
                dom.removeEventListener('mouseleave', handleMouseOut);
            };
        }

    }, [])

    return { hovered, nodeRef };
}
