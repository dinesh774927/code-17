import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    list: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onAdd = event => {
    event.preventDefault()
    const {list, title, amount, type} = this.state
    const newList = [...list, {id: uuidv4(), title, amount, type}]
    this.setState({
      list: newList,
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    })
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onDelete = id => {
    const {list} = this.state
    const filterList = list.filter(each => each.id !== id)
    this.setState({list: filterList})
  }

  render() {
    const {list, title, amount, type} = this.state

    return (
      <div className="container">
        <div className="box1">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div className="box2">
          <MoneyDetails list={list} />
        </div>
        <div className="box3">
          <h1 className="input-heading">Add Transaction</h1>
          <form onSubmit={this.onAdd}>
            <div className="input-container">
              <label className="label" htmlFor="input1">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                value={title}
                className="input"
                id="input1"
                placeholder="TITLE"
                type="input"
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="input2">
                AMOUNT
              </label>
              <input
                onChange={this.onChangeAmount}
                value={amount}
                className="input"
                id="input2"
                placeholder="AMOUNT"
                type="input"
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="input3">
                TYPE
              </label>
              <select
                value={type}
                onChange={this.onChangeType}
                className="input"
                id="input3"
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="box3">
          <h1 className="history-heading">History</h1>
          <div className="history-container">
            <div className="table-container">
              <p className="table-heading">Title</p>
              <p className="table-heading">Amount</p>
              <p className="table-heading">Type</p>
            </div>
            <div>
              <hr />
            </div>
            <ul className="ul">
              {list.map(each => (
                <TransactionItem
                  func={this.onDelete}
                  key={each.id}
                  option={transactionTypeOptions}
                  item={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
