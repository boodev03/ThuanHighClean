import { useEffect, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
  };

  useEffect(() => {
    document.title = "Thuan High Clean | Liên hệ | Hỗ trợ 24/7";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white p-8 rounded-2xl shadow-2xl max-w-4xl w-full transition-all duration-300 ease-in-out transform hover:shadow-3xl">
        <div className="md:w-1/2 pr-4">
          <h2 className="text-3xl font-bold mb-6">Gửi phản hồi</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                spellCheck="false"
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-900 border-0 rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                placeholder="Họ, tên"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2 group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  spellCheck="false"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-gray-900 border-0 rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  placeholder="Số điện thoại"
                  required
                />
              </div>
              <div className="w-1/2 group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  spellCheck="false"
                  onChange={handleChange}
                  className="w-full bg-gray-100 text-gray-900 border-0 rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="group">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                spellCheck="false"
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-900 border-0 rounded-[8px] p-3 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
                placeholder="Thông tin góp ý"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-4 rounded-[8px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Gửi
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 pl-4 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
          <h2 className="text-3xl font-bold mb-6">Liên hệ</h2>
          <div className="space-y-4">
            <p className="flex cursor-default items-center text-gray-700 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
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
            <p className="flex cursor-default items-center text-gray-700 transition-all duration-300 ease-in-out transform hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
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
  );
}
