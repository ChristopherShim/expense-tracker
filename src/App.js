import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 295.67, date: new Date(2001, 2, 28) },
    { title: "Toilet Paper", amount: 10.23, date: new Date(2003, 5, 14) },
    { title: "Desk", amount: 100.99, date: new Date(2011, 2, 1) },
    { title: "Chair", amount: 34.55, date: new Date(2011, 2, 21) },
  ];

  return (
    <div className="App">
      <h2>Stat Tracker</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
