"use client"

import { useState, useEffect } from "react"
import { getMygraph } from "../hooks/api"

interface Expense {
  month: string
  amount_spent: number
}

interface ExpenseData {
  error: boolean
  message: string
  expenses: Expense[]
}

const ExpenseGraph = () => {
  const [data, setData] = useState<ExpenseData | null>(null)
  const [maxExpense, setMaxExpense] = useState(0)
  const { data: response, isLoading, isError, error, refetch } = getMygraph()

  useEffect(() => {
    if (response) {
      setData(response)
      if (response.expenses && response.expenses.length > 0) {
        setMaxExpense(Math.max(...response.expenses.map((e:any) => e.amount_spent)))
      }
    }
  }, [response])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>
  if (!data || !data.expenses || data.expenses.length === 0) return <div>No data available</div>

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
  }

  const getBarHeight = (amount: number) => {
    return `${(amount / maxExpense) * 100}%`
  }

  const currentMonth = data.expenses[data.expenses.length - 2]

  return (
    <div className="bg-white px-5 pt-12 pb-3 md:pb-6 rounded-xl text-gray-700 w-full shadow-lg">
      <div className="mt-4 relative">
        <div className="text-base font-semibold text-[#343C6A] text-center ml-36">
          {formatAmount(currentMonth?.amount_spent || 0)}
        </div>
        <div className="mt-2 flex justify-between items-end h-24">
          {data.expenses.map((expense, index) => (
            <div
              key={expense.month}
              className={`w-8 rounded ${index === data.expenses.length - 2 ? "bg-teal-400" : "bg-gray-200"}`}
              style={{ height: getBarHeight(expense.amount_spent) }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-gray-500 text-sm mt-2">
          {data.expenses.map((expense, index) => (
            <span key={expense.month} className={index === data.expenses.length - 2 ? "text-black" : ""}>
              {expense.month.slice(0, 3)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExpenseGraph
