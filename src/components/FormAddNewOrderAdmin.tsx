import React, { useState } from "react";
import axiosClient from "@/api/axiosClient";
import { useNavigate } from "react-router-dom";
export default function formAddNewOrderAdmin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nameOfCustomer: "",
    phone: "",
    address: "",
    service: "",
    dateOfOrder: "",
    mainBeforeImg: null,
    mainAfterImg: null,
    beforeImgs: [],
    afterImgs: [],
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
    const files = event.target.files;
    setFormData((prevData) => ({
        ...prevData,
        [fieldName]: fieldName === "beforeImgs" || fieldName === "afterImgs" ? files : files?.[0],
    }));
};

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData();
    data.append("nameOfCustomer", formData.nameOfCustomer);
    data.append("phone", formData.phone);
    data.append("address", formData.address);
    data.append("service", formData.service);
    data.append("dateOfOrder", formData.dateOfOrder);

    // Thêm các tệp ảnh vào FormData
    if (formData.mainBeforeImg) {
        data.append("mainBeforeImg", formData.mainBeforeImg);
    }
    if (formData.mainAfterImg) {
        data.append("mainAfterImg", formData.mainAfterImg);
    }
    if (formData.beforeImgs.length > 0) {
      Array.from(formData.beforeImgs).forEach((file) =>
        data.append("beforeImgs", file)
      );
    }
    if (formData.afterImgs.length > 0) {
      Array.from(formData.afterImgs).forEach((file) =>
        data.append("afterImgs", file)
      );
    }

    axiosClient
      .post("/api/order", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const id = response?.data?.insertedId;
        if (id) {
          navigate(`/detail/${id}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
        <div className="columns-2">
          <div className="mb-3">
            <label
              htmlFor="nameOfCustomer"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tên khách hàng:
            </label>
            <input
              id="nameOfCustomer"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Trần Văn A"
              required
              onChange={(event) =>
                setFormData({ ...formData, nameOfCustomer: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Số điện thoại:
            </label>
            <input
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0355***234"
              required
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Địa chỉ:
          </label>
          <input
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Đường **, Hiệp Bình Chánh, Thủ Đức, TP.HCM"
            required
            onChange={(event) =>
              setFormData({ ...formData, address: event.target.value })
            }
          />
        </div>
        <div className="columns-2">
          <div className="mb-3">
            <label
              htmlFor="service"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Dịch vụ sử dụng:
            </label>
            <input
              id="service"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Chi tiết sản phẩm đã sử dụng..."
              required
              onChange={(event) =>
                setFormData({ ...formData, service: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="dateOfOrder"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ngày đặt:
            </label>
            <input
              id="dateOfOrder"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              required
              onChange={(event) =>
                setFormData({ ...formData, dateOfOrder: event.target.value })
              }
            />
          </div>
        </div>
        <div className="columns-2">
          <div className="mb-3">
            <label
              htmlFor="mainBeforeImg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh chính trước làm:
            </label>
            <input
              id="mainBeforeImg"
              type="file"
              onChange={(e) => handleFileChange(e, "mainBeforeImg")}
              required
              className="block w-full text-sm text-gray-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="mainAfterImg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh trước làm khác(MAX 2 tấm):
            </label>
            <input
              id="mainAfterImg"
              type="file"
              onChange={(e) => handleFileChange(e, "mainAfterImg")}
              required
              className="block w-full text-sm text-gray-500"
              multiple
            />
          </div>
        </div>

        <div className="columns-2">
          <div className="mb-3">
            <label
              htmlFor="beforeImgs"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh chính sau làm:
            </label>
            <input
              id="beforeImgs"
              type="file"
              onChange={(e) => handleFileChange(e, "beforeImgs")}
              className="block w-full text-sm text-gray-500"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="afterImgs"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh sau làm khác(MAX 2 tấm):
            </label>
            <input
              id="afterImgs"
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, "afterImgs")}
              className="block w-full text-sm text-gray-500"
              required
            />
          </div>
        </div>
        {/* <div className="columns-2">
          <div className="mb-3">
            <label
              htmlFor="mainBeforeImg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh chính trước làm (1 tấm):
            </label>
            <input
              id="mainBeforeImg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="file"
              required
                onChange={(event) => setFormData({...formData, mainBeforeImg: event.target.value})}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="beforeImgs"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh trước làm khác (max 2 tấm):
            </label>
            <input
              id="beforeImgs"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="file"
              multiple
              required
              
            />
          </div>
        </div> */}
        {/* <div className="columns-2">
          <div className="mb-3">
            <label
              htmlFor="afterBeforeImg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh chính sau làm (1 tấm):
            </label>
            <input
              id="afterBeforeImg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="file"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="afterImgs"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh sau làm khác (max 2 tấm):
            </label>
            <input
              id="afterImgs"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="file"
              multiple
              required
            />
          </div>
        </div> */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
