// pages/transactions.js
"use client";
import { useEffect, useState } from "react";
import transactionsData from "./transaction.json";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate fetching data securely
    setTransactions(transactionsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.date}</td>
              <td className="py-2 px-4 border-b">{transaction.description}</td>
              <td
                className={`py-2 px-4 border-b text-right ${
                  transaction.amount < 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
