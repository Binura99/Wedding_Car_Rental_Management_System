import React, { useState } from 'react';

export const Test2 = ({ onAddExpense }) => {
  const [vehicle, setVehicle] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { vehicle, expenseType, amount, date };
    onAddExpense(expenseData);
    setVehicle('');
    setExpenseType('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vehicle:
        <input type="text" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
      </label>
      <label>
        Expense Type:
        <input type="text" value={expenseType} onChange={(e) => setExpenseType(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};
