// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {list} = props
  let totalIncome = 0
  let totalExpenses = 0
  const incomeList = list.filter(each => each.type === 'INCOME')
  const expensesList = list.filter(each => each.type === 'EXPENSES')
  const ofincome = incomeList.map(each => each.amount)
  const ofexpenses = expensesList.map(each => each.amount)
  ofincome.forEach(element => {
    totalIncome += element
  })
  ofexpenses.forEach(e => {
    totalExpenses += e
  })
  console.log(ofexpenses)
  return (
    <>
      <div className="balance-container">
        <img
          className="wallet"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="balance">Your Balance</p>
          <p data-testid="balanceAmount" className="bal">
            Rs {totalIncome - totalExpenses}
          </p>
        </div>
      </div>
      <div className="balance-container2">
        <img
          className="wallet"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="balance">Your Income</p>
          <p data-testid="incomeAmount" className="bal">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="balance-container3">
        <img
          className="wallet"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="balance">Your Expenses</p>
          <p data-testid="expensesAmount" className="bal">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
