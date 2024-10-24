import { DataTable } from "@/components/DataTable";
import { getServiceBySlug } from "@/data/services";
import { useParams } from "react-router-dom";
import { PriceTableColumns } from "./PriceTableColumn";
import { PriceTableData } from "@/types/PriceTable";

export default function PriceTable() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug as string);
  return (
    <section className="container mx-auto mt-[60px]">
      {service?.priceTable.map((price, index) => {
        const tableData = service.priceTable[index].prices.map(
          (price): PriceTableData => ({
            serviceName: service.priceTable[index].serviceName,
            size: price.size,
            price: price.price,
          })
        );
        return (
          <div
            key={index}
            className="[&_th:first-child]:w-2/5 [&_th:last-child]:w-2/5"
          >
            <h2 className="text-[32px] text-primary font-bold mb-5 capitialize">
              {price.title}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: price.description || "" }}
              className="lg:text-shadow lg:text-secondary mb-4"
            />
            <DataTable
              showPagination={false}
              columns={PriceTableColumns}
              data={tableData}
            />
          </div>
        );
      })}
    </section>
  );
}
