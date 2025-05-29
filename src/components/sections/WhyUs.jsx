import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      id: 'lean-dev',
      icon: 'fa-scissors',
      title: 'Phát Triển Tinh Gọn',
      description: 'Giảm 53% tính năng không cần thiết qua phân tích giá trị sử dụng thực tế. Áp dụng quy trình tinh gọn từ giai đoạn thiết kế đến triển khai, loại bỏ các bước thừa trong phát triển phần mềm.'
    },
    {
      id: 'value-dev',
      icon: 'fa-chart-line',
      title: 'Phát Triển Giá Trị',
      description: 'Tối ưu dòng chảy công việc với các phiên bản lặp lại ngắn (2-4 tuần). Xây dựng chu trình tạo giá trị linh hoạt theo nhu cầu thực tế của người dùng, tập trung vào kết quả đo lường được.'
    },
    {
      id: 'demand-dev',
      icon: 'fa-bullseye',
      title: 'Phát Triển Theo Nhu Cầu',
      description: 'Phát triển phần mềm dựa trên nhu cầu thực tế thay vì dự đoán. Sử dụng hệ thống công việc trực quan để cân bằng tải và giảm 40% thời gian hoàn thành các tính năng mới.'
    },
    {
      id: 'continuous-dev',
      icon: 'fa-sync-alt',
      title: 'Phát Triển Liên Tục',
      description: 'Phân tích liên tục và hồi đáp mở để nâng cao chất lượng code. Thực hiện cải tiến dựa trên dữ liệu thực tế và quy trình phát triển linh hoạt nhằm tạo ra giải pháp đáp ứng chính xác nhu cầu doanh nghiệp.'
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Tại Sao Chọn Chúng Tôi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tại Sao Chọn <span className="gradient-text">LeanTechCo</span> Làm Đối Tác Công Nghệ?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Triết lý LEAN trong phát triển phần mềm – Loại bỏ lãng phí, tối ưu hóa giá trị và tăng tốc độ phát triển 
            giúp doanh nghiệp vận hành hiệu quả hơn
          </p>
        </div>

        {/* Why Us Features */}
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div key={reason.id} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className={`fas ${reason.icon} text-xl text-primary`}></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-10 bg-gradient-to-r from-primary to-blue-700 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Sẵn Sàng Tối Ưu Hóa Doanh Nghiệp Của Bạn?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Hãy để đội ngũ chuyên gia của chúng tôi cùng bạn tạo ra giá trị thực tế cho doanh nghiệp trong hành trình tối ưu hóa.
          </p>
          <a href="#contact" className="btn bg-white text-primary hover:bg-white/90 transition-colors">
            Liên Hệ Ngay <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 