// Write your code here
import './index.css'

const TransactionItem = props => {
  const {item, func, option} = props
  const typecheck = option.filter(each => each.optionId === item.type)

  const deleteitem = () => {
    func(item.id)
  }
  return (
    <li>
      <div className="table-container2">
        <p className="items">{item.title}</p>
        <p className="items">{item.amount}</p>
        <p className="items">{typecheck[0].displayText}</p>
        <button
          data-testid="delete"
          onClick={deleteitem}
          className="button-delete"
          type="button"
        >
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
      <div>
        <hr />
      </div>
    </li>
  )
}

export default TransactionItem
