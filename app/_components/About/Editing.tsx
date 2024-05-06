import React from "react";
import EditedVideo from "./EditedVideo";

function Editing() {
  return (
    <div className=" border-2 border-black w-full h-[65vh]  flex md:flex-row flex-col justify-center md:justify-between item-center px-4 text-center overflow-auto">
      <div className="md:flex  md:items-center md:justify-center mt-64 mb-2 md:gap-0 md:mt-0 md:text-5xl text-2xl font-brimestone">
        Video Editing
      </div>
      <div className="flex md:justify-end justify-center items-center">
        <EditedVideo />
      </div>
    </div>
  );
}

export default Editing;
