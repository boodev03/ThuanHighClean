import { DataTable } from "@/components/DataTable";
import { customers } from "@/data/customerUsed";
import { CustomerTableColumns } from "./CustomerTableColumn";
import { useEffect, useState } from "react";
import axiosClient from "@/api/axiosClient";

export default function CustomerList() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    axiosClient.get("/api/order").then((response) => {
      if (response.data?.message === "Token is invalid") {
        // navigate("/admin/login");
      }
      setOrders(response.data);
    });
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  console.log(orders);
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px]  max-w-[70%] font-bold mb-10">
        Danh sách khách hàng sử dụng dịch vụ
      </h2>
      <DataTable columns={CustomerTableColumns} data={customers} />
    </section>
  );
}
