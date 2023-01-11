import React, { useState, useEffect } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";

import Expenses from "./Components/Expenses/Expenses";

let DUMMY_EXPENSE = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  function fetchData() {
    fetch("https://63b31a77ea89e3e3db3e0e3e.mockapi.io/api/v1/product/new/expenses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setExpenses(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch("https://63b31a77ea89e3e3db3e0e3e.mockapi.io/api/v1/product/new/expenses", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    }).then((response) => {
      fetchData();
    });
  };

  return (
    <div>
    <h2 id= "headline"> Expense Tracker </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;

