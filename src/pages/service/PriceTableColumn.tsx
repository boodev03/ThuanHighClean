"use client";

import { ColumnDef } from "@tanstack/react-table";

import { PriceTableData } from "@/types/PriceTable";
import { DataTableColumnHeader } from "../../components/DataTableColumnHeader";

export const PriceTableColumns: ColumnDef<PriceTableData>[] = [
  {
    accessorKey: "serviceName",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="w-auto text-center *:font-bold *:text-black justify-center"
        column={column}
        title="Dịch vụ"
      />
    ),
    cell: ({ row }) => (
      <p className="w-auto font-bold py-2 text-center">
        {row.getValue("serviceName")}
      </p>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "size",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Kích thước"
        className="text-center *:font-bold *:text-black justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <p className="font-medium py-2 text-center">{row.getValue("size")}</p>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Chi phí"
        className="text-center *:font-bold *:text-black justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <p className="font-medium py-2 text-center">{row.getValue("price")}</p>
      );
    },
  },
];
