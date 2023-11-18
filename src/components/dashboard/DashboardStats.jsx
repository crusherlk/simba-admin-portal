import { IoBagHandle, IoPieChart } from "react-icons/io5";
function DashboardStats() {
  return (
    <div className="flex flex-col gap-4">
      <StatsWrapper>
        <div className="pr-4">
          <p className="text-sm text-gray-500 font-light uppercase mb-4">
            Total Income
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-4xl text-gray-700 font-semibold">$2352.50</p>
            <p className="text-sm text-green-500">+13% than last week</p>
          </div>
        </div>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
      </StatsWrapper>
      <StatsWrapper>
        <div className="pr-4">
          <p className="text-sm text-gray-500 font-light uppercase mb-4">
            Total Expense
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-4xl text-gray-700 font-semibold">$2352.50</p>
            <p className="text-sm text-red-500">-13% than last week</p>
          </div>
        </div>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <IoPieChart className="text-2xl text-white" />
        </div>
      </StatsWrapper>
    </div>
  );
}
export default DashboardStats;

function StatsWrapper({ children }) {
  return (
    <div className="bg-white rounded p-12 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
