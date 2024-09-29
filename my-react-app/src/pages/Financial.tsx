import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Smart Irrigation Investments",
    value: 25,
    description:
      "Invest in smart irrigation systems to efficiently manage water resources and reduce costs.",
    details:
      "Using sensors and automated irrigation systems can help monitor soil moisture and adjust water usage, saving water and increasing crop yields. This leads to long-term financial benefits.",
  },
  {
    name: "Sustainable Farming Practices",
    value: 20,
    description:
      "Adopt sustainable farming practices to enhance soil health and productivity.",
    details:
      "Practices like crop rotation, cover cropping, and reduced tillage help preserve soil fertility, reduce input costs, and increase profitability over time.",
  },
  {
    name: "Precision Agriculture",
    value: 15,
    description:
      "Use precision agriculture tools to optimize resource use and maximize farm output.",
    details:
      "By leveraging technology like GPS and data analytics, farmers can apply inputs (water, fertilizer, pesticides) more accurately, minimizing waste and boosting production efficiency.",
  },
  {
    name: "Diversifying Crops",
    value: 25,
    description:
      "Diversify crops to reduce risk and increase market opportunities.",
    details:
      "Growing a variety of crops can stabilize income by reducing the impact of market fluctuations and adverse weather conditions. It's also a way to enter new markets and add more revenue streams.",
  },
  {
    name: "Protecting Against Market Volatility",
    value: 15,
    description:
      "Develop strategies to protect against volatile market prices for agricultural products.",
    details:
      "Consider contracts, futures, and insurance options to hedge against unpredictable price changes. These tools can provide financial security and ensure stable income even when markets are unstable.",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4560"];

const Financial = () => {
  const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        AgriTech Farm Finance Strategies
      </h1>
      <p className="text-gray-700 mb-8 text-center">
        Discover key financial strategies to optimize your farm's resources and
        improve profitability.
      </p>

      <div className="flex justify-center mb-6">
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            cx={200} // Adjust to give space for the legend
            cy={200}
            labelLine={false}
            outerRadius={150}
            label={({ value }) => `${((value / totalValue) * 100).toFixed(1)}%`}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{
              paddingLeft: "20px", // Adds spacing between the pie and legend
              position: "relative",
              right: "-50px", // Move legend to the right outside the chart
            }}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Financial;
