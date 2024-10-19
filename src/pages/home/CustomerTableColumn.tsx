"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../../components/DataTableColumnHeader";
import { CustomerUsed } from "@/types/CustomerUsed";
import { Link } from "react-router-dom";

export const CustomerTableColumns: ColumnDef<CustomerUsed>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tên khách hàng" />
    ),
    cell: ({ row }) => <div className="w-[140px]">{row.getValue("name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Địa chỉ" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("address")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "serviceName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Dịch vụ sử dụng"
        className="font-bold"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("serviceName")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "beforeImage",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Hình ảnh trước khi sử dụng"
      />
    ),
    cell: ({ row }) => {
      return <img className="size-[100px]" src={row.getValue("beforeImage")} />;
    },
  },
  {
    accessorKey: "afterImage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hình ảnh sau khi sử dụng" />
    ),
    cell: ({ row }) => {
      return <img className="size-[100px]" src={row.getValue("afterImage")} />;
    },
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Thao tác" />
    ),
    cell: ({ row }) => (
      <Link to={`/detail/${row.getValue("id")}`}>Xem chi tiết</Link>
    ),
  },
];
