import DashboardStats from "../components/dashboard/DashboardStats";
import RecentOrders from "../components/dashboard/RecentOrders";
import TransactionCharts from "../components/dashboard/TransactionCharts";
import PopularProducts from "../components/dashboard/PopularProducts";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <DashboardStats />
        <TransactionCharts />
      </div>
      <div className="flex gap-4 w-full items-start">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}
export default Dashboard;
