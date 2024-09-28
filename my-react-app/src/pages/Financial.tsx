import React, { useState } from "react";
import { DollarSign, PieChart, TrendingUp, CreditCard, Shield } from "lucide-react";

const FinancialTip: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-4">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Financial = () => {
  const [expandedTip, setExpandedTip] = useState<number>(0);

  const tips = [
    {
      icon: <DollarSign className="text-green-600" />,
      title: "Budgeting Basics",
      description:
        "Create a budget to track income and expenses, ensuring you're living within your means.",
      details:
        "List all income sources and categorize your expenses into needs and wants. Use the 50/30/20 rule: 50% for essentials, 30% for discretionary spending, and 20% for savings or debt repayment.",
    },
    {
      icon: <PieChart className="text-orange-600" />,
      title: "Diversifying Investments",
      description:
        "Diversify your investment portfolio to spread risk and maximize potential returns.",
      details:
        "Invest in a mix of asset classes like stocks, bonds, real estate, and commodities. This reduces the impact of poor performance in any one area. Consider index funds for broad exposure.",
    },
    {
      icon: <TrendingUp className="text-blue-600" />,
      title: "Building Wealth Over Time",
      description:
        "Start investing early to take advantage of compound interest and grow wealth over time.",
      details:
        "The earlier you start investing, the more time your money has to grow. Even small, regular contributions can accumulate significantly due to compound interest. Automate your investments to stay consistent.",
    },
    {
      icon: <CreditCard className="text-purple-600" />,
      title: "Managing Credit Responsibly",
      description:
        "Use credit wisely to build a good credit score and avoid unnecessary debt.",
      details:
        "Pay off your balance in full each month to avoid interest charges. Keep your credit utilization ratio low (under 30%). Regularly check your credit report for errors and dispute inaccuracies.",
    },
    {
      icon: <Shield className="text-red-600" />,
      title: "Protecting Against Fraud",
      description:
        "Safeguard your finances by taking measures to prevent identity theft and fraud.",
      details:
        "Use strong, unique passwords for online banking. Monitor your accounts regularly for suspicious activity. Enable two-factor authentication and avoid sharing sensitive information over unsecured channels.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Financial Literacy Tips
      </h1>
      <p className="text-gray-700 mb-8 text-center">
        Learn essential financial practices to manage your money effectively and build wealth.
      </p>

      {tips.map((tip, index) => (
        <div
          key={index}
          onClick={() => setExpandedTip(expandedTip === index ? -1 : index)}
          className="cursor-pointer"
        >
          <FinancialTip {...tip} />
          {expandedTip === index && (
            <div className="bg-blue-100 p-4 rounded-lg mb-4 ml-8">
              <p className="text-gray-800">{tip.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Financial;
