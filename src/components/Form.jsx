import React, { useEffect, useState } from "react";
import backIcon from "../assets/icons/Vector 5.svg";

function Form() {
  return (
    <div className="w-full h-96 flex  justify-between items-center px-8 lg:px-64 ">
      <div className="h-full bg-form-bg min-w-full flex rounded-3xl py-6 border-2 items-center justify-center backdrop-blur-2xl border-white">
        <form className="flex  flex-col gap-7 w-full h-full px-6">
          <input
            className="w-full placeholder:text-white outline-none text-base lg:text-lg h-16 bg-transparent border-2 rounded-lg text-white px-4 border-white"
            placeholder="First Name"
          />
          <input
            className="w-full placeholder:text-white outline-none text-base lg:text-lg h-16 bg-transparent border-2 rounded-lg text-white px-4 border-white"
            placeholder="Last Name"
          />
          <input
            className="w-full placeholder:text-white outline-none text-base lg:text-lg h-16 bg-transparent border-2 rounded-lg text-white px-4 border-white"
            placeholder="Email"
          />
          <button className="w-full h-16 cursor-pointer bg-white text-black uppercase text-base lg:text-lg border-2 rounded-lg flex  items-center justify-center border-white">
            <span>Mint your free nft</span>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
