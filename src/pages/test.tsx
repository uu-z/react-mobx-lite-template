import React, { useRef } from "react";
import { useToggle, useFullscreen } from "react-use";
export const TestPage = () => {
  const ref = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(ref, show, { onClose: () => toggle(false) });
  return (
    <div>
      <div>
        <div ref={ref}>
          <div>{isFullscreen ? "Fullscreen" : "Not fullscreen"}</div>
          <button onClick={() => toggle()}>Toggle </button>
        </div>
      </div>
    </div>
  );
};
