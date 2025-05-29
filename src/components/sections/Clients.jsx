import React, { useState } from 'react';

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState('cicc');

  const clients = [
    {
      id: 'cicc',
      name: 'CICC',
      logo: '/assets/images/client-cicc.png',
      alt: 'CICC - Improving to Success',
      description: 'Trung tâm Cải tiến và Năng suất Quốc gia',
      testimonial: {
        content: 'Lean HRM đã giải quyết triệt để các vấn đề tồn đọng trong quản trị nhân sự của chúng tôi. Báo cáo chính xác hơn 87%, giảm 62% thời gian xử lý hồ sơ và tiết kiệm 48% chi phí quản trị. Đầu tư thực sự xứng đáng với doanh nghiệp chúng tôi.',
        author: 'Nguyễn Thanh Diệu',
        position: 'Giám đốc nhân sự, Công ty CICC',
        companyStats: [
          { label: '500+', sublabel: 'Doanh nghiệp được tư vấn' },
          { label: '15 Năm', sublabel: 'Kinh nghiệm trong ngành' }
        ]
      }
    },
    {
      id: 'ctivn',
      name: 'CTI Vietnam',
      logo: '/assets/images/client-ctivn.jpeg',
      alt: 'CTI Vietnam Logo',
      description: 'Viện Công nghệ Thông tin Việt Nam',
      testimonial: {
        content: 'Giải pháp ERP của LeanTechCo mang lại kết quả đo lường được: dữ liệu liên kết xuyên suốt, giảm 53% sai sót vận hành, tiết kiệm 45% thời gian báo cáo. Lãnh đạo chúng tôi ra quyết định nhanh hơn và chính xác hơn dựa trên dữ liệu thời gian thực.',
        author: 'Nguyễn Thanh Phong',
        position: 'Chief Strategy Officer, CTI Vietnam',
        companyStats: [
          { label: '200+', sublabel: 'Giải pháp IT triển khai' },
          { label: '98.5%', sublabel: 'Độ tin cậy hệ thống' }
        ]
      }
    },
    {
      id: 'artstuff',
      name: 'ArtStuff',
      logo: '/assets/images/client-artstuffvn.png',
      alt: 'ArtStuff Creative Agency',
      description: 'Công ty Thiết kế Sáng tạo',
      testimonial: {
        content: 'Không chỉ là phần mềm, mà là giải pháp hoàn chỉnh để tối ưu hóa quy trình của doanh nghiệp. Tích hợp dữ liệu từ nhiều nguồn khác nhau, cung cấp báo cáo chi tiết, và hỗ trợ đắc lực trong việc ra quyết định chiến lược.',
        author: 'Trần Văn Minh',
        position: 'Giám đốc điều hành, ArtStuff',
        companyStats: [
          { label: '120+', sublabel: 'Dự án sáng tạo hoàn thành' },
          { label: '92%', sublabel: 'Tỷ lệ hài lòng khách hàng' }
        ]
      }
    }
  ];

  const currentClient = clients.find(client => client.id === selectedClient);

  return (
    <section id="clients" className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Đối Tác & Khách Hàng <span className="text-primary">Tiêu Biểu</span>
          </h2>
        </div>

        {/* Client Logos Row - Interactive Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex w-full border-t border-gray-200">
            {clients.map((client) => (
              <button
                key={client.id}
                onClick={() => setSelectedClient(client.id)}
                className={`flex-1 flex justify-center items-center px-6 py-8 transition-all duration-300 border-t-4 ${
                  selectedClient === client.id 
                    ? 'border-t-primary text-primary' 
                    : 'border-t-transparent text-gray-600 hover:text-gray-900 hover:border-t-gray-300'
                }`}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/80x40/666666/white?text=${encodeURIComponent(client.name)}`;
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Section */}
        {currentClient && (
          <div 
            className="shadow-2xl"
            style={{
              borderRadius: '24px',
              backgroundImage: 'url(./assets/images/customer-story-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              minHeight: '400px',
              display: 'grid',
              gridTemplateColumns: '1fr 2.5fr',
              gridColumnGap: '0px'
            }}
          >
            {/* Left Side - Company Info & Stats */}
            <div className="relative z-10 flex flex-col justify-center p-12 text-white">
              {/* Company Logo */}
              <div className="mb-8">
                <img 
                  src={currentClient.logo} 
                  alt={currentClient.alt}
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/200x100/ffffff/1331d2?text=${encodeURIComponent(currentClient.name)}`;
                  }}
                />
              </div>

              {/* Stats */}
              <div className="space-y-6 mb-8">
                {currentClient.testimonial.companyStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold mb-1">{stat.label}</div>
                    <div className="text-blue-200 text-sm font-medium uppercase tracking-wide">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <button className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors w-fit text-sm">
                Tìm hiểu thêm
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="relative z-10 flex items-center justify-center p-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-2xl">
                <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                  "{currentClient.testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">
                      {currentClient.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {currentClient.testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {currentClient.testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients; 