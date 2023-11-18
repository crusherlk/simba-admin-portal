import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    expense: 4000,
    income: 2400,
  },
  {
    name: "Feb",
    expense: 3000,
    income: 1000,
  },
  {
    name: "Mar",
    expense: 2700,
    income: 9800,
  },
  {
    name: "Apr",
    expense: 2300,
    income: 3900,
  },
  {
    name: "May",
    expense: 3400,
    income: 4000,
  },
  {
    name: "Jun",
    expense: 4500,
    income: 3800,
  },
  {
    name: "Jul",
    expense: 4000,
    income: 2400,
  },
  {
    name: "Aug",
    expense: 3000,
    income: 1000,
  },
  {
    name: "Sep",
    expense: 2700,
    income: 9800,
  },
  {
    name: "Oct",
    expense: 2300,
    income: 3900,
  },
  {
    name: "Nov",
    expense: 3400,
    income: 4000,
  },
  {
    name: "Dec",
    expense: 4500,
    income: 3800,
  },
];

function TransactionCharts() {
  return (
    <div className="h-[26rem] bg-white p-4 rounded border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="w-full mt-4 flex-1 text-xs flex justify-center items-center">
        <ResponsiveContainer width={"90%"} height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" name="Income" fill="#0ea5e9" />
            <Bar dataKey="expense" name="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default TransactionCharts;
