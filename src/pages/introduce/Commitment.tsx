const commits = [
  "Tư vấn tận tình, chi tiết, cặn kẽ và giải đáp mọi thắc mắc khi bạn có nhu cầu sử dụng dịch vụ vệ sinh của Thuan High Clean.",
  "Đảm bảo cung cấp dịch vụ vệ sinh giá rẻ nhất, an toàn nhất giúp bạn tiết kiệm tối đa chi phí vệ sinh.",
  "Sử dụng hóa chất vệ sinh chính hãng, không ảnh hưởng sức khỏe người sử dụng, an toàn cho đồ đạc.",
  "Nhân viên vệ sinh trung thực, tỉ mỉ, được đào tạo bài bản vệ sinh mọi ngóc ngách theo yêu cầu của quý khách hàng.",
  "Máy móc vệ sinh hiện đại, chuyên dụng, hoàn thành công việc vệ sinh nhanh chóng.",
  "Làm việc đúng giờ, bàn giao dự án đúng hạn cho quý khách hàng theo cam kết đề ra.",
  "Cam kết mức giá công khai được niêm yết trên website.",
  "Có chính sách hậu mãi, không chối bỏ trách nhiệm khi có vấn đề phát sinh không mong muốn xảy ra.",
];

// -	Đảm bảo cung cấp dịch vụ vệ sinh giá rẻ nhất, an toàn nhất giúp bạn tiết kiệm tối đa chi phí vệ sinh.
// -	Sử dụng hóa chất vệ sinh chính hãng, không ảnh hưởng sức khỏe người sử dụng, an toàn cho đồ đạc.
// -	Nhân viên vệ sinh trung thực, tỉ mỉ, được đào tạo bài bản vệ sinh mọi ngóc ngách theo yêu cầu của quý khách hàng.
// -	Máy móc vệ sinh hiện đại, chuyên dụng, hoàn thành công việc vệ sinh nhanh chóng.
// -	Làm việc đúng giờ, bàn giao dự án đúng hạn cho quý khách hàng theo cam kết đề ra.
// -	Cam kết mức giá công khai được niêm yết trên website.
// -	Có chính sách hậu mãi, không chối bỏ trách nhiệm khi có vấn đề phát sinh không mong muốn xảy ra.

const Commitment = () => {
  return (
    <section className="container mx-auto pt-[50px]">
      <h2 className="text-[32px]  max-w-[70%] text-black font-bold mb-5">
        Cam kết với khách hàng
      </h2>
      <p className="text-justify mb-8">
        Bằng khát vọng tiên phong cùng ý nguyện phát triển bền vững chung tay
        góp sức bảo vệ trái đất xanh thông qua dịch vụ vệ sinh. Thuan High Clean
        phấn đấu trở thành trung tâm dịch vụ vệ sinh cung cấp các giải pháp làm
        sạch an toàn, giá rẻ cho người sử dụng. Là địa chỉ tin cậy của Quý khách
        hàng. Chúng tôi cam kết:
      </p>
      <div className="max-w-[80%] mx-auto">
        {commits.map((commit, index) => (
          <div key={index} className="space-y-5 mb-4">
            <p className="text-justify">
              {/* STT */}
                <span className="font-bold">{index + 1}.  </span>
              <i>{commit}</i>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commitment;
