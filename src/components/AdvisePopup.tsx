import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { services } from "@/data/services";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AdvisePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (openCount < 2) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setOpenCount((prev) => prev + 1);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [openCount]);

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="bg-white !rounded-[12px] p-6 shadow-lg">
        <DialogHeader>
          <img
            className="w-[180px] mx-auto mb-4"
            src="/assets/images/logo.png"
          />
          <DialogTitle className="text-xl font-bold text-[#333]">
            Đăng ký tư vấn
          </DialogTitle>
        </DialogHeader>
        <form>
          <div className="mb-4">
            <label className="block text-secondary font-semibold">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="w-full p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary font-semibold">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              className="w-full p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary font-semibold">
              Dịch vụ cần tư vấn
            </label>
            <select
              name="service"
              value={formData.service}
              className="w-full p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Chọn dịch vụ
              </option>
              {services.map((service) => (
                <option value={service.slug}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-secondary font-semibold">
              Lời nhắn
            </label>
            <textarea
              name="message"
              value={formData.message}
              className="w-full p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
              placeholder="Nhập lời nhắn..."
              required
            ></textarea>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full px-4 h-10 bg-primary text-white rounded-[8px] hover:bg-white hover:text-primary"
            >
              Đăng ký
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisePopup;
