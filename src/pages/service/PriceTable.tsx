import { DataTable } from "@/components/DataTable";
import { PriceTableData } from "@/types/PriceTable";
import { PriceTable as PriceTableType } from "@/types/Service";
import { PriceTableColumns } from "./PriceTableColumn";

interface IProps {
  priceTable: PriceTableType[]
}

export default function PriceTable({priceTable}: IProps) {
  return (
    <section className="container mx-auto">
      {priceTable.map((price, index) => {
        const tableData = priceTable[index].prices.map(
          (price): PriceTableData => ({
            serviceName: priceTable[index].serviceName,
            size: price.size,
            price: price.price,
          })
        );
        return (
          <div
            key={index}
            className="[&_th:first-child]:w-2/5 [&_th:last-child]:w-2/5"
          >
            <h2 className="text-[32px]  max-w-[100%] md:max-w-[70%] text-primary text-justify font-bold mb-5 capitialize">
              {price.title}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: price.description || "" }}
              className="lg:text-shadow lg:text-secondary text-justify mb-4 text-justify"
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
