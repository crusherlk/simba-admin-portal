const recent_orders = [
  {
    product_id: "0003",
    customer_name: "Alice Johnson",
    order_date: "2023-11-12",
    order_total: 69.98,
    shipping_address: "123 Main St, Cityville, State",
    order_status: "PLACED",
  },
  {
    product_id: "0008",
    customer_name: "Bob Smith",
    order_date: "2023-11-12",
    order_total: 89.99,
    shipping_address: "456 Oak Ave, Townsville, State",
    order_status: "CONFIRMED",
  },
  {
    product_id: "0006",
    customer_name: "Charlie Brown",
    order_date: "2023-11-12",
    order_total: 74.97,
    shipping_address: "789 Pine Rd, Villagetown, State",
    order_status: "SHIPPED",
  },
  {
    product_id: "0001",
    customer_name: "David Davis",
    order_date: "2023-11-12",
    order_total: 19.99,
    shipping_address: "101 Elm Ln, Hamletville, State",
    order_status: "OUT_FOR_DELIVERY",
  },
  {
    product_id: "0007",
    customer_name: "Eva White",
    order_date: "2023-11-12",
    order_total: 79.99,
    shipping_address: "202 Maple Blvd, Boroughburg, State",
    order_status: "DELIVERED",
  },
  {
    product_id: "0002",
    customer_name: "Frank Miller",
    order_date: "2023-11-12",
    order_total: 99.98,
    shipping_address: "303 Cedar Ct, Township, State",
    order_status: "PLACED",
  },
  {
    product_id: "0009",
    customer_name: "Grace Turner",
    order_date: "2023-11-12",
    order_total: 44.99,
    shipping_address: "404 Birch Ave, Villageville, State",
    order_status: "CONFIRMED",
  },
  {
    product_id: "0004",
    customer_name: "Harry Johnson",
    order_date: "2023-11-12",
    order_total: 119.98,
    shipping_address: "505 Redwood Rd, Hamletown, State",
    order_status: "SHIPPED",
  },
  {
    product_id: "0010",
    customer_name: "Ivy Green",
    order_date: "2023-11-12",
    order_total: 29.99,
    shipping_address: "606 Sycamore St, Citytown, State",
    order_status: "OUT_FOR_DELIVERY",
  },
  {
    product_id: "0005",
    customer_name: "Jack Black",
    order_date: "2023-11-12",
    order_total: 39.99,
    shipping_address: "707 Willow Way, Villagetown, State",
    order_status: "DELIVERED",
  },
];

function RecentOrders() {
  return (
    <div className="p-4 rounded border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="mt-4">
        <table className="w-full text-gray-700 ">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Product ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recent_orders.map((order, idx) => (
              <tr key={idx}>
                <td>#{(idx + 1).toString().padStart(4, 0)}</td>
                <td>{order.product_id}</td>
                <td>{order.customer_name}</td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>${order.order_total}</td>
                <td>{order.shipping_address}</td>
                <td>{getOrderStatus(order.order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default RecentOrders;

function getOrderStatus(status) {
  switch (status) {
    case "PLACED":
      return (
        <span className="capitalize py-1 px-2 rounded text-xs text-sky-600 bg-sky-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "CONFIRMED":
      return (
        <span className="capitalize py-1 px-2 rounded text-xs text-orange-600 bg-orange-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "SHIPPED":
      return (
        <span className="capitalize py-1 px-2 rounded text-xs text-teal-600 bg-teal-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "OUT_FOR_DELIVERY":
      return (
        <span className="capitalize py-1 px-2 rounded text-xs text-yellow-600 bg-yellow-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    case "DELIVERED":
      return (
        <span className="capitalize py-1 px-2 rounded text-xs text-green-600 bg-green-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded text-xs text-gray-600 bg-gray-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}
