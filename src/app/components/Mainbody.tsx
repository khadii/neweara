import React from 'react'
import { BsFillCreditCard2FrontFill, BsPlusLg } from 'react-icons/bs'
import Cards, { CreditCard2 } from './cards'
import CardDashboard from './Cashdata'
import TransactionsTable from './Table'
import { FaPlus } from 'react-icons/fa6'

export default function Mainbody() {
  return (
    <div className='bg-[#EDF0F7]'>


<div className="px-6 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mb-6">
      {/* Cards Section */}
      
     
          <h2 className="text-xl font-semibold text-[#343C6A] ">My Cards</h2>
          <button className="flex items-center gap-2 text-[#343C6A] hover:text-[#343C6A] text-base font-semibold justify-end">
            <FaPlus /> 
            <span>Add Card</span>
          </button>
          <h2 className="text-xl font-semibold text-[#343C6A]">My Expense</h2>
      

      
    
    </div>
    {/* //card */}
    <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
    <Cards/>
    <CreditCard2/>
    <CardDashboard/>
    </div>
    <TransactionsTable/>
    </div>
  )
}
