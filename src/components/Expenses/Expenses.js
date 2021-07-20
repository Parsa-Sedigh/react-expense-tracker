import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses() {

    return (
        // <div className="expenses">
        <Card className="expenses">
            <ExpenseItem title={'test'} amount={'123'} date={'2021'} />
        </Card>
        // </div>
    );
}

export default Expenses;
