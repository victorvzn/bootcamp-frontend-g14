import { useEffect, useState, useContext } from "react"
import { deleteExpense, fetchExpenses } from "../services/budgets"
import MonitorBudget from "../components/MonitorBudget"

import { UserContext } from "../context/UserContext"

import { getUser } from "../services/budgets"

const Home = () => {
  const { user } = useContext(UserContext)

  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0)

  useEffect(() => {
    getUser(user.id)
      .then(data => setBudget(data))
    fetchExpenses()
      .then((data) => setExpenses(data))
      // .then(setExpenses)
  }, [])

  const handleDelete = (id) => {
    deleteExpense(id)
      .then(data => {
        
      })
  }

  return (
    <>
      <MonitorBudget
        budget={budget}
        expenses={expenses}
      />

      <h1 className="text-3xl">Expense list</h1>

      <ul className="flex flex-col gap-3">
        {expenses.map(expense => {
          return (
            <li key={expense.id}>
              {expense.name} - S/ {expense.amount} <button onClick={() => handleDelete(expense.id)} className="bg-red-600 px-2 text-white">Delete</button>
            </li>
          )
        })}
      </ul>
    </>

  )
}

export default Home