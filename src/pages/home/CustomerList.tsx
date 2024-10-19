import { DataTable } from "@/components/DataTable";
import { customers } from "@/data/customerUsed";
import { CustomerTableColumns } from "./CustomerTableColumn";

export default function CustomerList() {
  return (
    <section className="container mx-auto mt-[60px]">
      <h2 className="text-[32px] font-bold mb-10">
        Danh sách khách hàng sử dụng dịch vụ
      </h2>
      <DataTable columns={CustomerTableColumns} data={customers} />
    </section>
  );
}
