const MonitorBudget = ({ budget, expenses }) => {
  const expensesTotal = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount)
  , 0)

  return (
    <section className="container bg-orange-300 flex justify-center gap-20 p-4">
      <div className="text-center">
        <h4 className="text-3xl font-extrabold">{budget}</h4>
        <h6 className="text-lg font-semibold">Budget</h6>
      </div>
      <div>
        <h4 className="text-3xl font-extrabold">{expensesTotal}</h4>
        <h6 className="text-lg font-semibold">Expenses</h6>
      </div>
      <div>
        <h4 className="text-3xl font-extrabold">{ budget - expensesTotal}</h4>
        <h6 className="text-lg font-semibold">Balance</h6>
      </div>
    </section>
  )
}

export default MonitorBudget