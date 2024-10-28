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
import { ScrollArea } from "./ui/scroll-area";

const AdvisePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   service: "",
  //   message: "",
  // });

  useEffect(() => {
    if (openCount < 2) {
      const timer = setTimeout(
        () => {
          setShowPopup(true);
          setOpenCount((prev) => prev + 1);
        },
        openCount === 1 ? 10000 : 15000
      );

      return () => clearTimeout(timer);
    }
  }, [openCount]);

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="bg-white !rounded-[12px] p-0 shadow-lg">
        <ScrollArea className="w-full max-h-[90vh] py-6">
          <DialogHeader className="px-6 pb-6">
            <img
              className="w-[180px] mx-auto mb-4"
              src="/assets/images/logo.png"
              alt="Thuan High Clean"
            />
            <DialogTitle className="text-xl font-bold text-[#333]">
              Đăng ký tư vấn
            </DialogTitle>
          </DialogHeader>
          <form className="block px-6">
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label className="block text-secondary font-semibold">
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="name"
                  // value={formData.name}
                  className="w-full h-9 text-[15px] p-2 mt-2 border rounded-[8px] focus:outline-none ring-2 ring-transparent focus:ring-primary"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-secondary font-semibold">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  // value={formData.phone}
                  className="w-full h-9 text-[15px] p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-secondary font-semibold">
                Dịch vụ cần tư vấn
              </label>
              <select
                name="service"
                // value={formData.service}
                className="w-full text-[15px] text-secondary p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
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
                // value={formData.message}
                className="w-full text-[15px] p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
                placeholder="Nhập lời nhắn..."
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:text-white font-bold py-3 px-4 rounded-[8px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Để lại lời nhắn
              </Button>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisePopup;
