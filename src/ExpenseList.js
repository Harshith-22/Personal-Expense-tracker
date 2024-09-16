import React, { useState } from "react";
import "./styles.css";

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  const [editing, setEditing] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleEdit = (expense) => {
    setEditing(expense.id);
    setNewDescription(expense.description);
    setNewAmount(expense.amount);
    setNewDate(expense.date);
  };

  const handleUpdate = (id) => {
    const updatedExpense = {
      id,
      description: newDescription,
      amount: parseFloat(newAmount),
      date: newDate,
    };
    editExpense(updatedExpense);
    setEditing(null);
  };

  return (
    <div className="expense-list">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((expense) => (
              <tr key={expense.id}>
                <td>
                  {editing === expense.id ? (
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  ) : (
                    expense.description
                  )}
                </td>
                <td>
                  {editing === expense.id ? (
                    <input
                      type="number"
                      value={newAmount}
                      onChange={(e) => setNewAmount(e.target.value)}
                    />
                  ) : (
                    `Rs ${expense.amount.toFixed(2)}`
                  )}
                </td>
                <td>
                  {editing === expense.id ? (
                    <input
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                    />
                  ) : (
                    expense.date
                  )}
                </td>
                <td>
                  {editing === expense.id ? (
                    <>
                      <button onClick={() => handleUpdate(expense.id)}>
                        Save
                      </button>
                      <button onClick={() => setEditing(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(expense)}>Edit</button>
                      <button onClick={() => deleteExpense(expense.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="total">
        Total Expenses: Rs&nbsp;
        {expenses
          .reduce((total, expense) => total + expense.amount, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export default ExpenseList;
