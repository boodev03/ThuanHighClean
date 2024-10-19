const data = [
  {
    logo: "/assets/images/introduce/zalo_pay.png",
    title: "ZaloPay",
    description: "Ứng dụng thanh toán di động nhanh trong 2 giây.",
  },
  {
    logo: "/assets/images/introduce/momo.png",
    title: "Momo",
    description: "Siêu ứng dụng thanh toán số 1 Việt Nam.",
  },
  {
    logo: "/assets/images/introduce/hoozing.png",
    title: "Hoozing",
    description: "Ứng dụng mua và thuê nhà.",
  },
];

export default function Partner() {
  return (
    <section className="bg-[#F5F5F5] mt-[50px] py-[50px]">
      <div className="container mx-auto">
        <h2 className="text-[32px] mb-10 font-bold">
          Đối tác của{" "}
          <span className="text-primary font-semibold">Thuan High Clean</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {data.map((item) => (
            <div key={item.title} className="flex items-center gap-5">
              <img
                className="w-[90px] rounded-[12px]"
                src={item.logo}
                alt={item.title}
              />
              <div>
                <p className="mt-2 mb-1 text-xl font-bold uppercase">
                  {item.title}
                </p>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
