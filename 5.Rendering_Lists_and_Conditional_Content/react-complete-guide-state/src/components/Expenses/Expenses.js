import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilterYear] = useState('2020')

    const filterChangesHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    let expensesContent = <p>No expenses found.</p>

    if(filterExpenses.length > 0) {
        expensesContent = filterExpenses.map((expenses) => {
            return(
               <ExpenseItem 
                key={expenses.id}
               title={expenses.title} 
               amount={expenses.amount}
               date={expenses.date} 
               />)}
           )
    }

   

    return (
        <Card className='expenses'>

            <ExpensesFilter 
            selected={filteredYear}
            onChangeFilter={filterChangesHandler} 
            />



            {expensesContent}

            {/* {filterExpenses.length === 0 && <p>No expenses found.</p>}

            {filterExpenses.length > 0 &&
                filterExpenses.map((expenses) => {
                    return(
                       <ExpenseItem 
                        key={expenses.id}
                       title={expenses.title} 
                       amount={expenses.amount}
                       date={expenses.date} 
                       />)}
                   )
            } */}

          


            


            {/* <ExpenseItem 
            title={props.items[0].title} 
            amount={props.items[0].amount}
            date={props.items[0].date}
            />
            <ExpenseItem 
            title={props.items[1].title} 
            amount={props.items[1].amount}
            date={props.items[1].date}
            />
            <ExpenseItem 
            title={props.items[2].title} 
            amount={props.items[2].amount}
            date={props.items[2].date}
            />
            <ExpenseItem 
            title={props.items[3].title} 
            amount={props.items[3].amount}
            date={props.items[3].date}
            />    */}

        </Card>

     
    )
}

export default Expenses;
