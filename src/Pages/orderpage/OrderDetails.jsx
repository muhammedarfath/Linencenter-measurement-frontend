import React, { useEffect, useState } from "react";
import useAxios from "../../axios";
import { CSVLink } from "react-csv";
import { FaEdit } from "react-icons/fa";
import EditDetailModal from "../../components/modal/EditDetailModal";
import { useDisclosure } from "@nextui-org/react";
import { Toaster, toast } from "react-hot-toast";

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [sortedOrderDetails, setSortedOrderDetails] = useState([]);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentOrder, setCurrentOrder] = useState(null);
  const axiosinstance = useAxios();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axiosinstance.get("measurement/order-details/");
        setOrderDetails(response.data);
        setSortedOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await axiosinstance.put(`/measurement/update-status/${id}/`, { status });
      const updatedOrderDetails = sortedOrderDetails.map((order) =>
        order.id === id ? { ...order, status } : order
      );
      setSortedOrderDetails(updatedOrderDetails);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const openEditModal = (order) => {
    setCurrentOrder(order);
    onOpen();
  };

  const closeModal = () => {
    onClose();
    setCurrentOrder(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosinstance.put(
        `/measurement/edit/${currentOrder.id}/`,
        currentOrder
      );
      setSortedOrderDetails(
        sortedOrderDetails.map((order) =>
          order.id === currentOrder.id ? currentOrder : order
        )
      );
      toast.success("Order updated successfully!");
      closeModal();
    } catch (error) {
      console.error("Error updating order:", error);
      toast.error("Error updating order. Please try again.");
    }
  };

  const handleDateRangeChange = () => {
    if (dateRange.start && dateRange.end) {
      const filteredOrders = orderDetails.filter((order) => {
        const orderDate = new Date(order.booking_date);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return orderDate >= startDate && orderDate <= endDate;
      });
      setSortedOrderDetails(filteredOrders);
    }
  };

  const filteredOrders = sortedOrderDetails.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const csvHeaders = [
    { label: "Order Number", key: "order_no" },
    { label: "Customer Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Booking Date", key: "booking_date" },
    { label: "Delivery Date", key: "delivery_date" },
    { label: "Bill Invoice No", key: "bill_invoice_no" },
    { label: "Status", key: "status" },
  ];

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-9 flex flex-col">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div className="flex gap-4 flex-wrap">
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
            className="block p-2 text-sm text-white border border-gray-300 rounded-lg w-full sm:w-40 bg-black focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
            className="block p-2 text-sm text-white border border-gray-300 rounded-lg w-full sm:w-40 bg-black focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleDateRangeChange}
            className="ml-2 inline-flex items-center text-white bg-blue-600 border border-gray-300 focus:outline-none hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2"
          >
            Apply
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by customer name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
          className="block p-2 text-sm text-white border border-gray-300 rounded-lg w-full sm:w-60 bg-black focus:ring-blue-500 focus:border-blue-500"
        />

        <CSVLink
          data={filteredOrders}
          headers={csvHeaders}
          filename="order-details.csv"
          className="inline-flex items-center text-white bg-green-600 border border-gray-300 focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-4 py-2 mt-4 sm:mt-0"
        >
          Export CSV
        </CSVLink>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-gray-400 uppercase bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Number
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Date
              </th>
              <th scope="col" className="px-6 py-3">
                Delivery Date
              </th>
              <th scope="col" className="px-6 py-3">
                Bill Invoice No
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-black border-b border-gray-700 hover:bg-gray-800"
                >
                  <td className="px-6 py-4">{order.order_no}</td>
                  <td className="px-6 py-4">{order.name}</td>
                  <td className="px-6 py-4">{order.phone}</td>
                  <td className="px-6 py-4">{order.booking_date}</td>
                  <td className="px-6 py-4">{order.delivery_date}</td>
                  <td className="px-6 py-4">{order.bill_invoice_no}</td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status || "ordered"}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className="bg-black text-white border border-gray-300 rounded-lg"
                    >
                      <option value="ordered">Ordered</option>
                      <option value="finished">Finished</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => openEditModal(order)}
                      className="font-medium text-2xl text-green-500 hover:underline"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <EditDetailModal
        isOpen={isOpen}
        onClose={closeModal}
        currentOrder={currentOrder}
        handleEditSubmit={handleEditSubmit}
        setCurrentOrder={setCurrentOrder}
      />
    </div>
  );
}

export default OrderDetails;
