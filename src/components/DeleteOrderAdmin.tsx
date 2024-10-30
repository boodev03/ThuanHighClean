/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";
import axiosClient from "@/api/axiosClient";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TableMessagesAdminProps {
  orders: Array<any>;
  onItemDeleted: () => void;
}

export default function DeleteOrderAdmin({
  orders,
  onItemDeleted,
}: TableMessagesAdminProps) {
  const handleDeleteOrder = (id: string) => {
    axiosClient
      .delete(`/api/order/${id}`)
      .then(() => {
        onItemDeleted();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">STT</StyledTableCell>
            <StyledTableCell>Tên khách hàng</StyledTableCell>
            <StyledTableCell>Số điện thoại</StyledTableCell>
            <StyledTableCell>Dịch vụ sử dụng</StyledTableCell>
            <StyledTableCell>Ảnh chính trước làm</StyledTableCell>
            <StyledTableCell>Ảnh trước làm khác</StyledTableCell>
            <StyledTableCell>Ảnh sau trước làm</StyledTableCell>
            <StyledTableCell>Ảnh sau làm khác</StyledTableCell>
            <StyledTableCell>Thời gian đặt</StyledTableCell>
            <StyledTableCell>Xóa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order: any, idx: any) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell align="center">{idx + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {order.nameOfCustomer}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {order.phone}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {order.service}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <img className="h-12" src={order.mainBeforeImg} alt="" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-2">
                  {order.beforeImgs.map((img: any) => (
                    <img className="h-12" src={img} alt="" />
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <img className="h-12" src={order.mainAfterImg} alt="" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-2">
                  {order.afterImgs.map((img: any) => (
                    <img className="h-12" src={img} alt="" />
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {format(new Date(order.dateOfOrder), "dd/MM/yyyy HH:mm:ss")}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <button
                  onClick={() => {
                    if (confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")) {
                      handleDeleteOrder(order._id);
                    }
                  }}
                  className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Xóa
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
