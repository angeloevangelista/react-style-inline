import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";

type UseHoverProps = {
  tagName: string;
  defaultStyle: React.CSSProperties;
  hoverStyle: React.CSSProperties;
};

const useHover = ({
  tagName,
  defaultStyle,
  hoverStyle,
}: UseHoverProps): React.FC => {
  const [isHovered, setIsHovered] = useState(false);

  const elementStyle = useMemo(
    () => (isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle),
    [defaultStyle, hoverStyle, isHovered]
  );

  return (props) => {
    const NewNode = React.createElement(tagName, {
      ...props,
      style: elementStyle,
    });

    return (
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={(nodeElement) => {
          nodeElement && ReactDOM.render(NewNode, nodeElement);
        }}
      />
    );
  };
};

export { useHover };
