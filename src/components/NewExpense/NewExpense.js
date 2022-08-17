import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';
function NewExpense(props){
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEitingHandler = () => {
        setIsEditing(true);
      };
      const stopEitingHandler = () => {
        setIsEditing(false);
      };

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEitingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEitingHandler}/>}
    </div>
};

export default NewExpense;