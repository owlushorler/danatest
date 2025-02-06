"use client";

// components/TransactionHistory.js
import React from "react";

// Dummy user data
const user = {
  name: "John Doe",
  accountNumber: "1234567890",
  profilePicture:
    "https://i.ibb.co/nMSY341X/istockphoto-1207856385-612x612.jpg",
};

// Dummy transaction data
const transactions = [
  {
    id: 1,
    date: "2025-01-20",
    description: "Deposit",
    amount: 200.0,
  },
  {
    id: 2,
    date: "2025-01-18",
    description: "Withdrawal",
    amount: -50.0,
  },
  {
    id: 3,
    date: "2025-01-15",
    description: "Transfer to Savings",
    amount: -100.0,
  },
  {
    id: 4,
    date: "2025-01-15",
    description: "Transfer to Savings",
    amount: 100.0,
  },
  {
    id: 5,
    date: "2025-01-30",
    description: " Savings",
    amount: -500.0,
  },
  {
    id: 6,
    date: "2025-01-35",
    description: "nepa",
    amount: -900.0,
  },
  {
    id: 7,
    date: "2025-01-1",
    description: "salary",
    amount: 25000.0,
  },
];

const TransactionHistory = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s Profile`}
          className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p
            className="text-gray-600"
            aria-label={`Account number ${user.accountNumber}`}
          >
            Account Number: {user.accountNumber}
          </p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2" id="transaction-history">
        Transaction History
      </h3>
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-gray-600">Date</th>
            <th className="px-4 py-2 text-left text-gray-600">Description</th>
            <th className="px-4 py-2 text-left text-gray-600">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id} role="row">
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.description}</td>
              <td
                className={`px-4 py-2 ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
