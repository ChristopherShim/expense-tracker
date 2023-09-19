import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "Car Insurance",
    amount: 295.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "a2",
    title: "Toilet Paper",
    amount: 10.23,
    date: new Date(2021, 5, 14),
  },
  { id: "a3", title: "Desk", amount: 100.99, date: new Date(2020, 2, 1) },
  { id: "a4", title: "Chair", amount: 34.55, date: new Date(2020, 2, 21) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <h2>Stat Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
