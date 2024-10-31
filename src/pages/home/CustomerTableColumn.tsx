"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "../../components/DataTableColumnHeader";
import { CustomerUsed } from "@/types/CustomerUsed";
import { Link } from "react-router-dom";

export const CustomerTableColumns: ColumnDef<CustomerUsed>[] = [
  {
    accessorKey: "nameOfCustomer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tên khách hàng" />
    ),
    cell: ({ row }) => (
      <div className="w-[140px]">{row.getValue("nameOfCustomer")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Số điện thoại" />
    ),
    cell: ({ row }) => <div className="w-[140px]">{row.getValue("phone")}</div>,
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
    accessorKey: "service",
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
            {row.getValue("service")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "mainBeforeImg",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Hình ảnh trước khi sử dụng"
      />
    ),
    cell: ({ row }) => {
      return (
        <img
          className="size-[100px]"
          alt="Thuan High Clean sản phẩm trước khi sử dụng"
          src={row.getValue("mainBeforeImg")}
        />
      );
    },
  },
  {
    accessorKey: "mainAfterImg",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hình ảnh sau khi sử dụng" />
    ),
    cell: ({ row }) => {
      return (
        <img
          className="size-[100px]"
          alt="Thuan High Clean sản phẩm sau khi sử dụng"
          src={row.getValue("mainAfterImg")}
        />
      );
    },
  },
  {
    accessorKey: "_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Thao tác" />
    ),
    cell: ({ row }) => (
      <Link to={`/detail/${row.getValue("_id")}`}>Xem chi tiết</Link>
    ),
  },
];
