import React from 'react';

const Products = () => {
  const products = [
    {
      id: 'lean-hrm',
      name: 'Lean HRM',
      tagline: 'Quản lý nhân sự thông minh',
      description: 'Phần mềm quản lý nhân sự toàn diện được thiết kế riêng cho doanh nghiệp Việt Nam. Tối ưu quy trình quản lý nhân sự, tiết kiệm chi phí và thời gian.',
      features: [
        'Quản lý thông tin nhân viên',
        'Tự động hóa chấm công và tính lương',
        'Đánh giá hiệu suất và phát triển',
        'Tuân thủ pháp luật lao động Việt Nam'
      ],
      icon: 'fa-users',
      color: 'from-primary to-blue-600',
      metrics: { efficiency: '+45%', time: '-60%' }
    },
    {
      id: 'lean-erp',
      name: 'Lean ERP',
      tagline: 'Hệ thống quản trị tổng thể',
      description: 'Nền tảng ERP tiên tiến được phát triển dựa trên nhu cầu thực tế của doanh nghiệp Việt Nam. Tích hợp toàn bộ quy trình vận hành doanh nghiệp vào một hệ thống thống nhất.',
      features: [
        'Quản lý tài chính và kế toán',
        'Quản lý chuỗi cung ứng',
        'Kiểm soát tồn kho và sản xuất',
        'Báo cáo và phân tích dữ liệu'
      ],
      icon: 'fa-chart-network',
      color: 'from-blue-600 to-blue-700',
      metrics: { efficiency: '+37%', cost: '-45%' }
    },
    {
      id: 'lean-work',
      name: 'Lean WORK',
      tagline: 'Quản lý dự án hiệu quả',
      description: 'Phần mềm quản lý công việc và dự án thông minh số 1 Việt Nam. Tăng năng suất, theo dõi tiến độ và tối ưu hóa quy trình làm việc nhóm.',
      features: [
        'Quản lý công việc và dự án',
        'Theo dõi thời gian và tiến độ',
        'Giao tiếp và cộng tác nhóm',
        'Tự động hóa quy trình làm việc'
      ],
      icon: 'fa-tasks',
      color: 'from-blue-700 to-blue-800',
      metrics: { productivity: '+52%', delivery: '+40%' }
    },
    {
      id: 'lean-search',
      name: 'Lean SEARCH',
      tagline: 'Tìm kiếm thông minh AI',
      description: 'Giải pháp tìm kiếm doanh nghiệp thông minh với công nghệ AI tối tân. Tìm kiếm nhanh chóng và chính xác thông tin trong toàn bộ hệ thống doanh nghiệp.',
      features: [
        'Tìm kiếm thông minh với AI',
        'Truy xuất dữ liệu đa nền tảng',
        'Phân tích ngữ cảnh tiếng Việt',
        'Tối ưu hóa kết quả tìm kiếm'
      ],
      icon: 'fa-search',
      color: 'from-blue-800 to-primary',
      metrics: { accuracy: '+87%', speed: '+65%' }
    }
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-primary to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-blue-900/90"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-400/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            LeanTech Ecosystem - <span className="text-blue-200">Hệ Sinh Thái Chuyển Đổi Số Toàn Diện</span>
          </h2>
          <p className="text-base text-white/80 leading-relaxed">
            Nền tảng tối ưu hóa toàn diện giúp tăng năng suất 37%, giảm 45% thời gian xử lý, 
            loại bỏ lãng phí và tạo dòng chảy giá trị xuyên suốt doanh nghiệp
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-white/30 hover:bg-white/15"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${product.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <i className={`fas ${product.icon} text-8xl`}></i>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <i className={`fas ${product.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <p className="text-white/90 text-sm">{product.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex gap-4 mt-6">
                    {Object.entries(product.metrics).map(([key, value]) => (
                      <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                        <div className="text-sm font-medium">{value}</div>
                        <div className="text-xs text-white/80 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-white/90 leading-relaxed mb-6">
                  {product.description}
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 group/feature">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-check text-xs text-white"></i>
                      </div>
                      <span className="text-white/80 text-sm group-hover/feature:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-white/20">
                  <a 
                    href="#contact" 
                    className="w-full bg-white text-primary hover:bg-blue-50 font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                  >
                    Tư vấn giải pháp
                    <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 