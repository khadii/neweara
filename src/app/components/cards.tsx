'use client'

import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import getmyCards from "../hooks/api";

export default function CreditCard() {
    const { data: response, isLoading, isError, error, refetch } = getmyCards();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    const card = response?.cards?.[0];
    
    return (
      <div className="max-w-3xl w-full mx-auto rounded-2xl bg-gradient-to-b from-[#0A06F4] to-[#5754f5] py-5 text-white shadow-xl">
          {card && (
          <div>
            <div className="flex justify-between items-start px-7 sm:px-6">
              <div>
                <p className="text-sm sm:text-base font-normal">Balance</p>
                <p className="text-lg sm:text-xl font-semibold">{card.balance}</p>
              </div>
              <BsFillCreditCard2FrontFill className="text-white text-xl sm:text-2xl" size={36} />
            </div>
            <div className="flex justify-between pt-5 pb-6 sm:pt-7 px-7 sm:px-6">
              <div className="w-full justify-start">
                <p className="text-xs font-normal opacity-85 ">VALID THRU</p>
                <p className="font-semibold text-sm sm:text-base">{card.expiry_date}</p>
              </div>
              <div className="w-full justify-center">
                <p className="text-xs font-normal opacity-85">CARD HOLDER</p>
                <p className="font-semibold text-sm sm:text-base">{card.name}</p>
              </div>
            </div>
    
            <div className="pt-6 sm:pt-6 bg-gradient-to-b from-[#4C49ED] to-[#504df8]">
              <div className="flex justify-between w-full px-7">
                <div className="w-full justify-start flex-2">
                  <p className="text-lg sm:text-xl -tracking-wider font-semibold w-full ">
                    {card.card_number}
                  </p>
                </div>
                <div className="flex gap-2 relative w-full justify-end flex-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full a" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/40 rounded-full absolute right-5" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
    
}




export  function CreditCard2() {
    const { data: response, isLoading, isError, error, refetch } = getmyCards();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    const card = response?.cards?.[1];
    return (
      <div className="max-w-3xl w-full mx-auto rounded-2xl bg-white py-5 text-white shadow-xl">
               {card && (
       <>
        <div className="flex justify-between items-start px-7 sm:px-6">
          <div>
            <p className="text-sm sm:text-base font-normal opacity-85 text-[#718EBF]">Balance</p>
            <p className="text-lg sm:text-xl font-semibold text-[#343C6A]">{card.balance}</p>
          </div>
          <BsFillCreditCard2FrontFill className="text-gray-500 text-xl sm:text-2xl" size={36} />
        </div>
        <div className="flex justify-between pt-5 sm:pt-7 px-7 sm:px-6">
          <div className="w-full justify-start">
            <p className="text-xs font-normal opacity-85 text-[#718EBF]">VALID THRU</p>
            <p className="font-semibold text-sm sm:text-base text-[#343C6A]">{card.expiry_date}</p>
          </div>
          <div className="w-full justify-center">
            <p className="text-xs font-normal opacity-85 text-[#718EBF]">CARD HOLDER</p>
            <p className="font-semibold text-sm sm:text-base text-[#343C6A]">{card.name}</p>
          </div>
        </div>
        <div className="mt-12 sm:mt-12 flex justify-between w-full  px-7">
          <div className="w-full  justify-start flex-2">
            <p className="text-lg sm:text-xl -tracking-wider font-semibold w-full text-[#343C6A] ">
            {card.card_number}
            </p>
          </div>
          <div className="flex gap-2 relative w-full justify-end flex-1">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full a" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full absolute right-5" />
          </div>
        </div> </>   )}
      </div>
    );
  }
