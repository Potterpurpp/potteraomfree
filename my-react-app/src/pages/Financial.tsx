import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Budgeting Basics",
    value: 25,
    description:
      "Create a budget to track income and expenses, ensuring you're living within your means.",
    details:
      "List all income sources and categorize your expenses into needs and wants. Use the 50/30/20 rule: 50% for essentials, 30% for discretionary spending, and 20% for savings or debt repayment.",
  },
  {
    name: "Diversifying Investments",
    value: 20,
    description:
      "Diversify your investment portfolio to spread risk and maximize potential returns.",
    details:
      "Invest in a mix of asset classes like stocks, bonds, real estate, and commodities. This reduces the impact of poor performance in any one area. Consider index funds for broad exposure.",
  },
  {
    name: "Building Wealth Over Time",
    value: 15,
    description:
      "Start investing early to take advantage of compound interest and grow wealth over time.",
    details:
      "The earlier you start investing, the more time your money has to grow. Even small, regular contributions can accumulate significantly due to compound interest. Automate your investments to stay consistent.",
  },
  {
    name: "Managing Credit Responsibly",
    value: 25,
    description:
      "Use credit wisely to build a good credit score and avoid unnecessary debt.",
    details:
      "Pay off your balance in full each month to avoid interest charges. Keep your credit utilization ratio low (under 30%). Regularly check your credit report for errors and dispute inaccuracies.",
  },
  {
    name: "Protecting Against Fraud",
    value: 15,
    description:
      "Safeguard your finances by taking measures to prevent identity theft and fraud.",
    details:
      "Use strong, unique passwords for online banking. Monitor your accounts regularly for suspicious activity. Enable two-factor authentication and avoid sharing sensitive information over unsecured channels.",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4560"];

const Financial = () => {
  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Financial Literacy Tips
      </h1>
      <p className="text-gray-700 mb-8 text-center">
        Learn essential financial practices to manage your money effectively and build wealth.
      </p>

      <div className="flex justify-center mb-6">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={150}
            label={({ value }) => `${((value / totalValue) * 100).toFixed(1)}%`}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const { name, description, details } = payload[0].payload;
                return (
                  <div className="bg-white p-3 shadow-lg rounded-md ">
                    <strong className="text-lg text-gray-800">{name}</strong>
                    <p className="text-gray-600">{description}</p>
                    <p className="text-sm text-gray-500">{details}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend wrapperStyle={{ textAlign: "center" }} />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Key Takeaways</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.map((entry, index) => (
            <li key={index}>
              <strong>{entry.name}:</strong> {entry.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Financial;
