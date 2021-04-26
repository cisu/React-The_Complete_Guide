import React from 'react'

import ExpenseFrom from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandle = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
        props.onAddExpense(expenseData);
    }


    return (
        <div className="new-expense">
           <ExpenseFrom onSaveExpenseData={saveExpenseDataHandle} />
        </div>
    )
}

export default NewExpense
