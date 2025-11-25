import axiosClient from "@/api/axiosClient";
import { DataTable } from "@/components/DataTable";
import { useEffect, useState } from "react";
import { CustomerTableColumns } from "./CustomerTableColumn";

export default function CustomerList() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = () => {
    axiosClient.get("/api/order").then((response) => {
      setOrders(response.data);
    });
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] max-w-[100%]  md:max-w-[70%] font-bold mb-10">
        Danh sách khách hàng sử dụng dịch vụ
      </h2>
      <DataTable columns={CustomerTableColumns} data={orders} />
    </section>
  );
}
