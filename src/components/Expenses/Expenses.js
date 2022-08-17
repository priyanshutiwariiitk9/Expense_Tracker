import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020')
  
  const filterChangeHandler= (selectedYear) => {
    //console.log('Expenses.js');
    setFilteredYear(selectedYear);
    //console.log(selectedYear);
  }
  
  const filteredExpenses= props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          />
        <ExpensesChart expenses={filteredExpenses}/> 
        <ExpensesList items={filteredExpenses} />;
      </Card>
    </li>
    
  );
}

export default Expenses;
