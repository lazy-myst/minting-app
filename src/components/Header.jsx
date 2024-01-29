import React, { useEffect, useState } from "react";
import backIcon from "../assets/icons/Vector 5.svg";
import { useWeb3Modal } from "@web3modal/wagmi1/react";
import { useAccount } from "wagmi";
function Header() {
  const { open, close } = useWeb3Modal();
  // const { address } = useAccount();

  return (
    <div className="w-full h-24 flex justify-between items-center px-4 lg:px-20">
      <button className="flex cursor-pointer text-black items-center bg-white px-2 lg:px-6 py-4 h-6 rounded-2xl justify-center">
        <img className="w-4 lg:w-5" src={backIcon} alt="Back Icon " />
        <p className="text-sm lg:text-base ml-2">Home</p>
      </button>
      <button
        onClick={() => open()}
        className="flex cursor-pointer border-white border items-center bg-transparent text-white px-2 lg:px-6 py-4 h-6 rounded-2xl justify-center"
      >
        <p className="text-sm lg:text-base ml-2">connect your wallet</p>
      </button>
    </div>
  );
}
export default Header;
