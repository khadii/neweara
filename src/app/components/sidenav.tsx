import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaChartLine, FaCreditCard, FaHouse, FaMoneyBillTransfer, FaMoneyCheckDollar, FaStar, FaUser } from "react-icons/fa6";
import { BsFillCreditCard2FrontFill, BsPlusLg } from "react-icons/bs"
import { FaCog, FaExchangeAlt, FaHandHoldingUsd, FaHome, FaTools } from "react-icons/fa";

export default function Sidenav() {
  const data = [
    { title: "Dashboard", pathname: "/Dashboard", icon: <FaHouse color="#B1B1B1" size={25}/>},
    { title: "Transactions", pathname: "/Transactions", icon:<FaExchangeAlt color="#1814F3" size={25} />,isActive: true},
    { title: "Accounts", pathname: "/Accounts", icon:<FaUser color="#B1B1B1"size={25} /> },
    { title: "Investments", pathname: "/Investments", icon: <FaChartLine color="#B1B1B1"size={25} /> },
    { title: "Credit Cards", pathname: "/Investments", icon:  <FaCreditCard color="#B1B1B1" size={25}/> },
    { title: "Loans", pathname: "/Investments", icon:  <FaHandHoldingUsd color="#B1B1B1" size={25} />},
    { title: "Services", pathname: "/Investments", icon:  <FaTools color="#B1B1B1" size={25} />},
    { title: "My Privileges", pathname: "/Investments", icon:  <FaStar color="#B1B1B1" size={25}/> },
    { title: "Setting", pathname: "/Investments", icon:  <FaCog color="#B1B1B1"size={25} /> },
  ];



  return <div >

  <div className="bg-white pl-12 pt-8" >
  <div className="flex gap-2 mb-16">
   <div>  <FaCreditCard className="text-[#1814F3] "size={36} /></div>
  <p className=" font-extrabold text-2xl text-[#343C6A]">
    BankDash.
    </p>
  </div>
<div className="space-y-11 h-screen">
{data.map((nav,index)=>(
    <div key={index} className="" >
    <div className=" flex  gap-6 " >
    <div className="">
     {nav.icon}
    </div>
    <p className={`font-medium text-lg  ${nav.isActive ? "text-[#1814F3] " : "text-gray-400"}`}>
   {nav.title}
    </p>
    </div>

    </div>
))}

</div>
  </div>
  </div>;
}
