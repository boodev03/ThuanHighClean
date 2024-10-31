import { getCusomterUsedById } from "@/data/customerUsed";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "@/api/axiosClient";
import { format} from "date-fns";


interface Order {
  _id: string;
  nameOfCustomer: string;
  phone: string;
  address: string;
  service: string;
  mainBeforeImg: string;
  mainAfterImg: string;
  beforeImgs: string[];
  afterImgs: string[];
  dateOfOrder: string;
}

export default function DetailUsedService() {
  const { slug } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const fetData = async () => {
      try {
        const response = await axiosClient.get(`/api/order/${slug}`);
        setOrder(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetData();
    console.log("Slug", slug);
  }, []);

  return (
    <section className="container mx-auto my-[60px]">
      <div className="md:max-w-[50%] space-y-3 mt-3 *:font-medium">
        <p>
          <span className="font-bold">Khách hàng: </span>{" "}
          {order?.nameOfCustomer}
        </p>
        <p>
          <span className="font-bold">Số điện thoại: </span> {order?.phone}
        </p>
        <p>
          <span className="font-bold">Địa chỉ: </span> {order?.address}
        </p>
        <p>
          <span className="font-bold">Dịch vụ sử dung: </span> {order?.service}
        </p>
        <p>
          <span className="font-bold">Thời gian vệ sinh: </span>{" "}
          {order?.dateOfOrder ? format(new Date(order.dateOfOrder), "dd/MM/yyyy") : ""}
        </p>
      </div>

      <div className="space-y-12 mt-12">
        <h2 className="text-[32px] max-w-[70%] text-[#333] font-bold mb-10">
          Hình ảnh thực tế
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded p-4 ">
            <p className="text-xl text-center">Hình ảnh trước khi làm</p>
            <img
              src={order?.mainBeforeImg}
              alt="Hình ảnh trước khi làm"
              className="w-full h-[250px] object-contain p-4 border-2 rounded"
            />
            {order?.beforeImgs.map((img) => 
              <img
                src={img}
                alt="Hình ảnh trước khi làm"
                className="w-full h-[250px] object-contain p-4 border-2 rounded"
              />
            )}
          </div>
          <div className="rounded p-4 ">
            <p className="text-xl text-center">Hình ảnh sau khi làm</p>
            <img
              src={order?.mainAfterImg}
              alt="Hình ảnh trước khi làm"
              className="w-full h-[250px] object-contain p-4 border-2 rounded"
            />
            {order?.afterImgs.map((img) => 
              <img
                src={img}
                alt="Hình ảnh trước khi làm"
                className="w-full h-[250px] object-contain p-4 border-2 rounded"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
