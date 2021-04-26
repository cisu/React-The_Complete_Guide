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

    const arrs = [1,2,3,4];

    return (
        <Card className='expenses'>

            <ExpensesFilter 
            selected={filteredYear}
            onChangeFilter={filterChangesHandler} 
            />

            {props.items.map((expenses) => {
             return(
                <ExpenseItem  
                title={expenses.title} 
                amount={expenses.amount}
                date={expenses.date} 
                />)}
            )}


            


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
