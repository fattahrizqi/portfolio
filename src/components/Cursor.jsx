import { React, useState } from "react";

function Cursor() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  const [cursorHover, setCursorHover] = useState(false);

  window.addEventListener("mousemove", (e) => {
    if (getComputedStyle(e.target).cursor === "pointer") {
      setCursorHover(true);
      setCursorX(e.pageX - 25);
      setCursorY(e.pageY - 10);
    } else {
      setCursorHover(false);
      setCursorX(e.pageX - 15);
      setCursorY(e.pageY - 5);
    }
  });
  return (
    <div className="absolute hidden md:block top-0 w-full h-full overflow-hidden">
      <div style={{ top: cursorY, left: cursorX }} className={`cursor ${cursorHover ? "w-5 h-5 bg-transparent border" : "w-3 h-3 bg-white"} absolute  z-[100] rounded-full transition-all`}></div>
    </div>
  );
}

export default Cursor;
