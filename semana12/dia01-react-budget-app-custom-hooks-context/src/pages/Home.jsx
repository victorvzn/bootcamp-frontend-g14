import { useEffect, useState } from "react"
import { fetchExpenses } from "../services/budgets"

const Home = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    fetchExpenses()
      .then((data) => setExpenses(data))
      // .then(setExpenses)
  }, [])

  return (
    <>
      <h1 className="text-3xl">Expense list</h1>

      <ul>
        {expenses.map(expense => {
          return (
            <li key={expense.id}>
              {expense.name} - S/ {expense.amount}
            </li>
          )
        })}
      </ul>
    </>

  )
}

export default Home