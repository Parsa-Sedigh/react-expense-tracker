import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    // approach 3:
    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
        });
    }

    return (
        <div>

          <Card className="expenses">
                      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* approach 1: */}
            {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : 
            filteredExpenses.map(expense => <ExpenseItem 
              title={expense.title} amount={expense.amount} date={expense.date} 
              key={expense.id} />)} */}

              {/* approach 2: */}
              {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
              {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem 
              title={expense.title} amount={expense.amount} date={expense.date} 
              key={expense.id} />)} */}

              {/* approach 3: */}
              {expensesContent}
          </Card>
        </div>
    );
}

export default Expenses;
