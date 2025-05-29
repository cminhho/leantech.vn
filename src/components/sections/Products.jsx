import React from 'react';

const Products = () => {
  const products = [
    {
      id: 'lean-hrm',
      name: 'Lean HRM',
      description: 'Phần mềm quản lý nhân sự toàn diện của LeanTechCo được thiết kế riêng cho doanh nghiệp Việt Nam. Tối ưu quy trình quản lý nhân sự, tiết kiệm chi phí và thời gian.',
      features: [
        'Quản lý thông tin nhân viên',
        'Tự động hóa chấm công và tính lương',
        'Đánh giá hiệu suất và phát triển',
        'Tuân thủ pháp luật lao động Việt Nam'
      ],
      image: 'https://www.automq.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/67480fef30f9df5f84f31d36/67eb556b6430868c6d6a798c_automq-home-page.png'
    },
    {
      id: 'lean-erp',
      name: 'Lean ERP',
      description: 'Nền tảng ERP tiên tiến được phát triển dựa trên nhu cầu thực tế của doanh nghiệp Việt Nam. Tích hợp toàn bộ quy trình vận hành doanh nghiệp vào một hệ thống thống nhất.',
      features: [
        'Quản lý tài chính và kế toán',
        'Quản lý chuỗi cung ứng',
        'Kiểm soát tồn kho và sản xuất',
        'Báo cáo và phân tích dữ liệu'
      ],
      image: 'https://www.automq.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/67480fef30f9df5f84f31d36/67eb556b6430868c6d6a798c_automq-home-page.png'
    },
    {
      id: 'lean-work',
      name: 'Lean WORK',
      description: 'Phần mềm quản lý công việc và dự án thông minh số 1 Việt Nam. Tăng năng suất, theo dõi tiến độ và tối ưu hóa quy trình làm việc nhóm.',
      features: [
        'Quản lý công việc và dự án',
        'Theo dõi thời gian và tiến độ',
        'Giao tiếp và cộng tác nhóm',
        'Tự động hóa quy trình làm việc'
      ],
      image: 'https://www.automq.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/67480fef30f9df5f84f31d36/67eb556b6430868c6d6a798c_automq-home-page.png'
    },
    {
      id: 'lean-search',
      name: 'Lean SEARCH',
      description: 'Giải pháp tìm kiếm doanh nghiệp thông minh với công nghệ AI tối tân. Tìm kiếm nhanh chóng và chính xác thông tin trong toàn bộ hệ thống doanh nghiệp.',
      features: [
        'Tìm kiếm thông minh với AI',
        'Truy xuất dữ liệu đa nền tảng',
        'Phân tích ngữ cảnh tiếng Việt',
        'Tối ưu hóa kết quả tìm kiếm'
      ],
      image: 'https://www.automq.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/67480fef30f9df5f84f31d36/67eb556b6430868c6d6a798c_automq-home-page.png'
    }
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Sản phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            LeanTech Ecosystem - <span className="gradient-text">Hệ Sinh Thái Chuyển Đổi Số Toàn Diện</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nền tảng tối ưu hóa toàn diện giúp tăng năng suất 37%, giảm 45% thời gian xử lý, 
            loại bỏ lãng phí và tạo dòng chảy giá trị xuyên suốt doanh nghiệp
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Product Image */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <i className="fas fa-check-circle text-primary mt-1"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className="btn btn-primary inline-flex mt-4"
                >
                  Tư vấn giải pháp <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 