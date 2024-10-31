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
  messages: Array<any>;
  onItemDeleted: () => void;
}

export default function TableMessagesAdmin({messages, onItemDeleted}: TableMessagesAdminProps) {
    const handleDeleteMessage = (id: string) => {
        axiosClient.delete(`/api/message/${id}`)
            .then(response => {
                console.log(response.data);
                onItemDeleted();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">STT</StyledTableCell>
                <StyledTableCell align="right">Thời gian</StyledTableCell>
                <StyledTableCell align="right">Tên khách hàng</StyledTableCell>
                <StyledTableCell align="right">Số điện thoại</StyledTableCell>
                <StyledTableCell align="right">Dịch vụ cần tư vấn</StyledTableCell>
                <StyledTableCell align="right">Lời nhắn</StyledTableCell>
                <StyledTableCell align="right">Hành động</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {messages.map((message: any, idx: any) => (
                <StyledTableRow key={message._id}>
                <StyledTableCell align="center">{idx + 1}</StyledTableCell>
                <StyledTableCell align="right">
                    {format(new Date(message.createdAt), "dd/MM/yyyy HH:mm:ss")}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {message.nameOfCustomer}
                </StyledTableCell>
                <StyledTableCell align="right">{message.phone}</StyledTableCell>
                <StyledTableCell align="right">{message.service}</StyledTableCell>
                <StyledTableCell align="right">{message.message}</StyledTableCell>
                <StyledTableCell align="right">
                    <button
                    onClick={() => {
                      if (confirm("Bạn có chắc chắn muốn xóa tin nhắn này không?")) {
                        handleDeleteMessage(message._id);
                      }
                    }}
                    className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                    Đã gọi
                    </button>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  );
}
