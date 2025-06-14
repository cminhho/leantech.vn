import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 'lean-hrm',
      name: 'Lean HRM',
      tagline: 'Quản lý nhân sự thông minh',
      description: 'Giải pháp quản lý nhân sự toàn diện với công nghệ AI tiên tiến cho doanh nghiệp',
      features: [
        'Quản lý hồ sơ nhân viên',
        'Quản lý chấm công',
        'Quản lý lương thưởng',
        'Quản lý thủ tục',
        'Quản lý tuyển dụng',
        'Quản lý đánh giá hiệu suất',
        'Đào tạo và phát triển',
        'Báo cáo nhân sự'
      ],
      icon: 'fa-users',
      image: `${process.env.PUBLIC_URL}/assets/images/product1.jpeg`,
      color: 'from-primary to-blue-600',
      badge: 'HRM'
    },
    {
      id: 'lean-erp',
      name: 'Lean ERP',
      tagline: 'Hệ thống quản trị tổng thể',
      description: 'Nền tảng ERP tích hợp mọi quy trình kinh doanh và vận hành doanh nghiệp',
      features: [
        'Quản lý báo giá',
        'Quản lý hợp đồng',
        'Quản lý đơn hàng',
        'Quản lý sản xuất',
        'Quản lý mua hàng',
        'Quản lý chất lượng',
        'Quản lý bảo trì và hiệu chuẩn',
        'Quản lý báo cáo thống kê'
      ],
      icon: 'fa-cogs',
      image: `${process.env.PUBLIC_URL}/assets/images/product0.jpeg`,
      color: 'from-blue-600 to-blue-700',
      badge: 'ERP'
    },
    {
      id: 'lean-work',
      name: 'Lean WORK',
      tagline: 'Quản lý dự án hiệu quả',
      description: 'Công cụ quản lý dự án và team work thông minh cho mọi quy mô tổ chức',
      features: [
        'Quản lý dự án',
        'Quản lý công việc',
        'Quản lý thời gian',
        'Quản lý tiến độ',
        'Quản lý tài nguyên',
        'Quản lý rủi ro',
        'Quản lý team',
        'Báo cáo dự án'
      ],
      icon: 'fa-tasks',
      image: `${process.env.PUBLIC_URL}/assets/images/product5.jpeg`,
      color: 'from-blue-700 to-blue-800',
      badge: 'Project'
    },
    {
      id: 'lean-search',
      name: 'Lean SEARCH',
      tagline: 'Tìm kiếm thông minh AI',
      description: 'Công cụ tìm kiếm và phân tích dữ liệu thông minh được hỗ trợ bởi AI cho doanh nghiệp',
      features: [
        'Tìm kiếm thông minh',
        'Phân tích dữ liệu',
        'Báo cáo phân tích',
        'Dashboard thống kê',
        'Xử lý ngôn ngữ tự nhiên',
        'Tìm kiếm semantic',
        'Tích hợp đa nguồn',
        'Quản lý từ khóa',
      ],
      icon: 'fa-search',
      image: `${process.env.PUBLIC_URL}/assets/images/product4.jpeg`,
      color: 'from-blue-800 to-primary',
      badge: 'AI Search'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Remove the gradient background div */}
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          {/* Products Label */}
          <div className="mb-4">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              SẢN PHẨM
            </span>
          </div>
          
          {/* Two Column Layout */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-6 lg:gap-12">
            {/* Left Side - Title */}
            <div className="flex-shrink-0">
              <h2 className="section-title">
                Sản Phẩm Công Nghệ
              </h2>
            </div>
            
            {/* Right Side - Description */}
            <div className="flex-1">
              <p className="section-subtitle mb-0">
                Khám phá các sản phẩm công nghệ được phát triển với chất lượng cao, 
                tập trung vào trải nghiệm người dùng và hiệu suất tối ưu.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white overflow-hidden border hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay with Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      <i className={`fas ${product.icon} text-2xl text-white`}></i>
                    </div>
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1">
                      {product.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col">
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="px-6 pb-4 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Tính năng chính:</h4>
                  <div className="space-y-2">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <i className="fas fa-check text-primary text-sm mt-1 flex-shrink-0"></i>
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="text-xs text-gray-500 font-medium mt-3">
                        +{product.features.length - 4} tính năng khác
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="px-6 pb-6 mt-auto">
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    {product.id === 'lean-hrm' ? (
                      <Link 
                        to="/products/lean-hrm" 
                        className="block w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-4 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        Tìm hiểu thêm
                      </Link>
                    ) : (
                    <button className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-4 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105">
                      Tìm hiểu thêm
                    </button>
                    )}
                    <button className="w-full text-primary border border-primary/20 font-semibold py-2 px-4 hover:bg-primary/5 transition-all duration-300">
                      Liên hệ tư vấn
                    </button>
                  </div>
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