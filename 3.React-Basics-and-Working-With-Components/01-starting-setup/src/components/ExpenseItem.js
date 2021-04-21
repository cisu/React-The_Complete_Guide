import React from 'react'

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {


    /*
    In order to take the month, year, date individual 
    we can use built-in method which is accessible on all date objects in JavaScript, toLocaleString(),
    like this {props.date.toLocaleString()}
   
    see more in mdn
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

    The best practice is to create a separate helper variable or a constant. 
    Something like month (see above) and inside the {curly braces} in JSX put the month variable or constant.

    By doing like this we keep ISX code clean and we have more complex logic in the rest of just put direct in JSX {curly braces}. ANd is overall is easier to read.
    */

    return (
        <Card className='expense-item'>
          
            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>

        </Card>
        
    )
}

export default ExpenseItem
