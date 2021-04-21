import React from 'react'

import './ExpenseDate.css';

const ExpenseDate = (props) => {
      /*
        March 28th 2021 
        -> 2021 is the year
        -> 2 is the month (since the month field here starts at zero, March has the number 2)
        -> 28 is the day    
     */

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const date = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    
    /*
    You can pass dynamic values in JSX into this {curly braces}
    between them.
    You can run basic Javascript expressions like {1+1}
    or something like {Math.random()}

    for the expenseDate it's a date object and if we try to do 
    {expenseDate} the app just breaks.
    Because this being a date object it can't be output as text like this.
    However we can call {expenseDate.toISOString()} to output as a string but the result this is not that we expect
    */


    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{date}</div>
        </div>
    )
}

export default ExpenseDate
