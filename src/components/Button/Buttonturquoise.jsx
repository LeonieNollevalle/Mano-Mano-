import React from "react";

// eslint-disable-next-line react/prop-types
function Buttonturquoise({ content }) {
  return (
    <div>
      <button
        className="transition h-12 w-72 rounded bg-teal px-16 font-semibold hover:bg-teal-400 active:bg-teal-700"
        type="button"
      >
        {content}
      </button>
    </div>
  );
}

export default Buttonturquoise;
