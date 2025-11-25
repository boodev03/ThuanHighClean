import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "@/api/axiosClient";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TableMessagesAdmin from "@/components/TableMessagesAdmin";
import FormAddNewOrderAdmin from "@/components/FormAddNewOrderAdmin";
import DeleteOrderAdmin from "@/components/DeleteOrderAdmin";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchMessages = () => {
    axiosClient.get("/api/message").then((response) => {
      if (response.data?.message === "Token is invalid") {
        navigate("/admin/login");
      }
      setMessages(response.data);
    });
  };

  const fetchOrders = () => {
    axiosClient.get("/api/order").then((response) => {
      if (response.data?.message === "Token is invalid") {
        navigate("/admin/login");
      }
      setOrders(response.data);
    });
  }

  // const checkLogin = () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/admin/login");
  //   }
  // }
  // get all message
  useEffect(() => {
    // checkLogin();
    // fetchMessages();
    // fetchOrders();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event) event.preventDefault();
    setValue(newValue);
  };

  return (
    <section className="items-center justify-center px-4 py-8 mx-auto">
      <button className="flex items-center gap-2 ml-4" onClick={() => navigate("/")}>
        <img className="h-16 rounded-full" src="/assets/images/logo.png" alt="logo" />
        <p className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
          Trang quản trị
        </p>
      </button>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tin nhắn khách hàng" {...a11yProps(0)} />
            <Tab label="Thêm đơn hàng" {...a11yProps(1)} />
            <Tab label="Xóa đơn hàng" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableMessagesAdmin messages={messages} onItemDeleted={() => fetchMessages()} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FormAddNewOrderAdmin />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <DeleteOrderAdmin orders={orders} onItemDeleted={() => fetchOrders()} />
        </CustomTabPanel>
      </Box>
    </section>
  );
}
