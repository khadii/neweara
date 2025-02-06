"use client";

import { BiBellPlus } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

export default function TransactionsHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#FFFFFF] border-b">
      <h1 className="text-3xl font-semibold text-[#343C6A]">Transactions</h1>

      <div className="flex items-center gap-4">
        <div className="relative">
          <BsSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search for something"
            className="pl-10 pr-4 py-2 bg-[#F5F7FA] border-none border-gray-200 focus:border-transparent focus:ring-0 focus:outline-none rounded-full"
          />
        </div>

        <button className="p-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-full">
          <IoSettings size={25} color="#718EBF" />
          <span className="sr-only">Settings</span>
        </button>

        <button className="relative p-2 text-gray-600 hover:text-gray-900 bg-gray-100 rounded-full">
          <BiBellPlus size={25} color="#FE5C73"/>
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
          <span className="sr-only">Notifications</span>
        </button>

        <RxAvatar size={55}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-2-2025_132341_www.figma.com-YrSsqeJ09NVFeHzgXFFLxFYiWUgrxo.jpeg"
            alt="User avatar"
          />
        </RxAvatar>
      </div>


      
    </header>
  );
}
