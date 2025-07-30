import React from "react";

const P3buttons = ({ lable }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="group font-extrabold italic uppercase  scale-80 hover:scale-100 transition-all duration-300 text-blue-300 hover:text-blue-600 cursor-pointer relative">
        <p className="z-10 relative group-hover:mix-blend-color-burn text-xl md:text-2xl lg:text-3xl"> {lable} </p>
        <div className="absolute z-5 bottom-[-50%] left-[1%] scale-y-[-1] rotate-[8deg] group-hover:rotate-[15deg] opacity-0 group-hover:opacity-80 transition-all duration-300" >
          <svg
          className="h-0 w-0 lg:h-[150px] lg:w-[250px]"
            viewBox="0 0 100 100"
            fill="#a1adff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="-20,0 110,10 120,50"   />
          </svg>
        </div>
        <div className="absolute bottom-[-50%] left-[1%] lg:left-[3%] md:left-[20%] scale-y-[-1] rotate-[20deg] group-hover:rotate-[10deg] opacity-50 group-hover:opacity-90 transition-all duration-300">
          <svg
            className="w-40 h-25 md:w-40 md:h-35 lg:h-[150px] lg:w-[250px]"
            viewBox="0 0 100 100"
            fill="#051582"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="-20,0 110,10 120,50"   />
          </svg>
        </div>
      </h1>
    </div>
  );
};

export default React.memo(P3buttons);
