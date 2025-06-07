import React from 'react';

const Clients = () => {
  const clients = [
    {
      id: 'cicc',
      name: 'CICC',
      logo: `${process.env.PUBLIC_URL}/assets/images/client-cicc.png`,
      alt: 'CICC - Improving to Success',
      description: 'Trung tâm Cải tiến và Năng suất Quốc gia'
    },
    {
      id: 'ctivn',
      name: 'CTI Vietnam',
      logo: `${process.env.PUBLIC_URL}/assets/images/client-ctivn.jpeg`,
      alt: 'CTI Vietnam Logo',
      description: 'Viện Công nghệ Thông tin Việt Nam'
    },
    {
      id: 'artstuff',
      name: 'ArtStuff',
      logo: `${process.env.PUBLIC_URL}/assets/images/client-artstuffvn.png`,
      alt: 'ArtStuff Creative Agency',
      description: 'Công ty Thiết kế Sáng tạo'
    }
  ];

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-semantic-primary relative overflow-hidden">
      {/* Subtle background pattern for visual depth */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header - Following Services.jsx pattern */}
        <div className="mb-16">
          {/* Professional badge using exact theming system */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              KHÁCH HÀNG
            </span>
          </div>
          
          {/* Two Column Layout - Following Services.jsx pattern */}
          <div className="flex flex-wrap sm:flex-nowrap sm:items-baseline gap-8 lg:gap-16">
            {/* Left Side - Title using exact section-title class */}
            <div className="flex-shrink-0">
              <h2 className="section-title">
                Doanh Nghiệp Đồng Hành
              </h2>
            </div>
            
            {/* Right Side - Description using exact section-subtitle class */}
            <div className="flex-1">
              <p className="section-subtitle mb-0">
                Được tin tưởng bởi các tổ chức hàng đầu trong việc chuyển đổi số và tối ưu hóa quy trình.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Client Logos Showcase */}
        <div className="relative">
          {/* Professional gradient overlays with improved styling */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-semantic-primary via-semantic-primary/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-semantic-primary via-semantic-primary/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Enhanced container with professional Angular Design styling */}
          <div className="bg-semantic-elevated border border-semantic-tertiary shadow-md hover:shadow-lg hover:border-semantic-secondary transition-all duration-normal overflow-hidden">
            {/* Inner border for layered professional effect */}
            <div className="p-8 md:p-12 border border-semantic-primary/10">
              {/* Scrolling container with improved spacing */}
              <div className="flex items-center gap-16 md:gap-20 lg:gap-24 animate-scroll-professional">
                {duplicatedClients.map((client, index) => (
                  <div 
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center group"
                  >
                    {/* Enhanced logo container with professional hover effects */}
                    <div className="relative p-4 transition-all duration-normal hover:scale-105">
                      <img 
                        src={client.logo} 
                        alt={client.alt}
                        className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-normal filter grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/200x100/f3f4f6/6b7280?text=${encodeURIComponent(client.name)}`;
                        }}
                      />
                      
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-semantic-brand-light/20 to-transparent blur-xl"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional trust indicators with semantic typography */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 text-semantic-secondary">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-primary icon-sm"></i>
              <span className="body-sm font-medium">Bảo mật cao</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-primary icon-sm"></i>
              <span className="body-sm font-medium">Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-certificate text-primary icon-sm"></i>
              <span className="body-sm font-medium">Chất lượng đảm bảo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS with professional animations */}
      <style jsx>{`
        @keyframes scroll-professional {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll-professional {
          animation: scroll-professional 25s linear infinite;
          will-change: transform;
        }
        
        /* Pause animation on hover for better UX */
        .animate-scroll-professional:hover {
          animation-play-state: paused;
        }
        
        /* Enhanced responsive behavior */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-professional {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients; 