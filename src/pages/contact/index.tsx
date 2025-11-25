import axiosClient from "@/api/axiosClient";
import SEOConfig from "@/components/SEO";
import { services } from "@/data/services";
import { useState } from "react";
import { toast } from "sonner";

interface FormFields {
  nameOfCustomer: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormFields>({
    nameOfCustomer: "",
    phone: "",
    service: "",
    message: "",
  });

  const onChange = (
    key: keyof FormFields,
    value: FormFields[keyof FormFields]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      await axiosClient.post("/api/message", {
        ...formData,
      });
      toast("Đã gửi lời nhắn", {
        description:
          "Cảm ơn bạn đã để lại lời nhắn. ThuanHighClean sẽ liên hệ với bạn sớm nhất.",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <SEOConfig
        title="ThuanHighClean - Liên hệ"
        description="Thuan High Clean cung cấp dịch vụ vệ sinh chuyên nghiệp: giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng và nhiều hơn nữa. Đội ngũ chuyên nghiệp, trang thiết bị hiện đại, đảm bảo chất lượng và sự hài lòng của khách hàng."
        keywords="dịch vụ vệ sinh, giặt thảm văn phòng, giặt nệm, phục hồi nệm, giặt thảm trang trí, giặt ghế văn phòng, Thuan High Clean, dịch vụ giặt thảm, vệ sinh văn phòng"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full transition-all duration-300 ease-in-out transform hover:shadow-3xl">
          <div className="md:w-1/2 pr-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Gửi phản hồi</h2>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2 group">
                  <input
                    type="text"
                    id="nameOfCustomer"
                    name="nameOfCustomer"
                    spellCheck="false"
                    value={formData.nameOfCustomer}
                    onChange={(e) => onChange("nameOfCustomer", e.target.value)}
                    className="w-full bg-gray-100 h-10 border placeholder:text-secondary text-secondary text-sm md:text-base rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                    placeholder="Tên của bạn"
                    required
                  />
                </div>
                <div className="w-1/2 group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    spellCheck="false"
                    value={formData.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    className="w-full bg-gray-100 h-10 border placeholder:text-secondary text-secondary text-sm md:text-base rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <select
                  name="service"
                  value={formData.service}
                  className="w-full text-sm md:text-base bg-gray-100 text-secondary p-2 mt-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  onChange={(e) => onChange("service", e.target.value)}
                >
                  <option value="" disabled>
                    Chọn dịch vụ
                  </option>
                  {services.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="group">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  spellCheck="false"
                  className="w-full border bg-gray-100 text-gray-900 text-sm md:text-base rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  placeholder="Thông tin góp ý"
                  required
                ></textarea>
              </div>
              <button
                onClick={onSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm md:text-base py-3 px-4 rounded-[8px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Gửi
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Liên hệ</h2>
            <div className="space-y-4">
              <p className="flex cursor-default items-center text-gray-700 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:translate-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                thuanhighclean@gmail.com
              </p>
              <p className="flex cursor-default items-center text-gray-700 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:translate-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                035 711 1566
              </p>
            </div>
            <div className="mt-8 transition-all duration-300 ease-in-out transform hover:scale-105">
              <img
                src="/assets/images/contact/contact.jpg"
                alt="Contact illustration"
                className="w-full rounded-[12px] shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
