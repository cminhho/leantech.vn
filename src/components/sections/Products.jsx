import React from 'react';

const Products = () => {
  const products = [
    {
      id: 'lean-hrm',
      name: 'Lean HRM',
      tagline: 'Quản lý nhân sự thông minh',
      description: 'Giải pháp quản lý nhân sự toàn diện với công nghệ AI tiên tiến',
      features: [
        'Quản lý hồ sơ nhân viên',
        'Quản lý tuyển dụng',
        'Quản lý đánh giá hiệu suất',
        'Quản lý chấm công',
        'Quản lý nghỉ phép',
        'Quản lý lương thưởng',
        'Đào tạo và phát triển',
        'Báo cáo nhân sự'
      ],
      icon: 'fa-users',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-primary to-blue-600',
      badge: 'HRM'
    },
    {
      id: 'lean-erp',
      name: 'Lean ERP',
      tagline: 'Hệ thống quản trị tổng thể',
      description: 'Nền tảng ERP tích hợp mọi quy trình kinh doanh của doanh nghiệp',
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
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-blue-600 to-blue-700',
      badge: 'ERP'
    },
    {
      id: 'lean-work',
      name: 'Lean WORK',
      tagline: 'Quản lý dự án hiệu quả',
      description: 'Công cụ quản lý dự án và team work thông minh cho mọi quy mô',
      features: [
        'Quản lý dự án',
        'Quản lý công việc',
        'Quản lý thời gian',
        'Quản lý tài nguyên',
        'Quản lý tiến độ',
        'Quản lý rủi ro',
        'Quản lý team',
        'Báo cáo dự án'
      ],
      icon: 'fa-tasks',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-blue-700 to-blue-800',
      badge: 'Project'
    },
    {
      id: 'lean-search',
      name: 'Lean SEARCH',
      tagline: 'Tìm kiếm thông minh AI',
      description: 'Công cụ tìm kiếm và phân tích dữ liệu được hỗ trợ bởi AI',
      features: [
        'Tìm kiếm thông minh',
        'Phân tích dữ liệu',
        'Xử lý ngôn ngữ tự nhiên',
        'Tìm kiếm semantic',
        'Tích hợp đa nguồn',
        'Quản lý từ khóa',
        'Báo cáo phân tích',
        'Dashboard thống kê'
      ],
      icon: 'fa-search',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-blue-800 to-primary',
      badge: 'AI Search'
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Remove the gradient background div */}
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          {/* Products Label */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold">
              SẢN PHẨM
            </span>
          </div>
          
          {/* Two Column Layout */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-8 lg:gap-16">
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

        {/* Professional Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 overflow-hidden flex flex-col transform hover:-translate-y-2"
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
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                      <i className={`fas ${product.icon} text-2xl text-white`}></i>
                    </div>
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Header */}
              <div className="p-6 pb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-primary text-sm font-semibold mb-2">
                  {product.tagline}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Features - Flex grow to push CTA to bottom */}
              <div className="px-6 pb-4 flex-grow">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tính năng chính:</h4>
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
                    <div className="text-xs text-gray-500 font-medium mt-2">
                      +{product.features.length - 4} tính năng khác
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className="px-6 pb-6 mt-auto">
                <div className="border-t border-gray-100 pt-4 space-y-3">
                  <button className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105">
                    Tìm hiểu thêm
                  </button>
                  <button className="w-full text-primary border border-primary/20 font-semibold py-2 px-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                    Liên hệ tư vấn
                  </button>
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