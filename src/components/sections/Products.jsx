import React from 'react';

const Products = () => {
  const products = [
    {
      id: 'lean-hrm',
      name: 'Lean HRM',
      tagline: 'Quản lý nhân sự thông minh',
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
      color: 'from-primary to-blue-600',
      badge: 'HRM'
    },
    {
      id: 'lean-erp',
      name: 'Lean ERP',
      tagline: 'Hệ thống quản trị tổng thể',
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
      color: 'from-blue-600 to-blue-700',
      badge: 'ERP'
    },
    {
      id: 'lean-work',
      name: 'Lean WORK',
      tagline: 'Quản lý dự án hiệu quả',
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
      color: 'from-blue-700 to-blue-800',
      badge: 'Project'
    },
    {
      id: 'lean-search',
      name: 'Lean SEARCH',
      tagline: 'Tìm kiếm thông minh AI',
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
      color: 'from-blue-800 to-primary',
      badge: 'AI Search'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Remove the gradient background div */}
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Sản Phẩm Công Nghệ
          </h2>
          <p className="section-subtitle-center">
            Các sản phẩm công nghệ được phát triển dựa trên phương pháp tinh gọn, 
            tối ưu hóa hiệu quả và giảm thiểu chi phí vận hành cho doanh nghiệp.
          </p>
        </div>

        {/* Clean Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 overflow-hidden flex flex-col"
            >
              {/* Clean Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${product.color} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <i className={`fas ${product.icon} text-white text-lg`}></i>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs font-medium">
                  {product.tagline}
                </p>
              </div>
              
              {/* Clean Content - Flex grow to push CTA to bottom */}
              <div className="px-6 pb-4 flex-grow">
                {/* Simplified Feature Points */}
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <i className="fas fa-check text-green-600 text-sm mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed CTA at bottom */}
              <div className="px-6 pb-6 mt-auto">
                <div className="border-t border-gray-100 pt-4">
                  <button className="btn btn-text btn-sm btn-wide">
                    Liên hệ
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