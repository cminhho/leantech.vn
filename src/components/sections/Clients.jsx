import React, { useState, useEffect, useRef } from 'react';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeClient, setActiveClient] = useState(null);
  const sectionRef = useRef(null);

  const clients = [
    {
      id: 'cicc',
      name: 'CICC',
      logo: `${process.env.PUBLIC_URL}/assets/images/client-cicc.png`,
      alt: 'CICC - Improving to Success',
      description: 'Trung tâm Cải tiến và Năng suất Quốc gia',
      project: 'Hệ thống quản lý chất lượng ISO',
      year: '2023',
      category: 'Tư vấn quản lý'
    },
    {
      id: 'ctivn',
      name: 'CTI Vietnam',
      logo: `${process.env.PUBLIC_URL}/assets/images/client-ctivn.jpeg`,
      alt: 'CTI Vietnam Logo',
      description: 'Viện Công nghệ Thông tin Việt Nam',
      project: 'Nền tảng chuyển đổi số doanh nghiệp',
      year: '2023',
      category: 'Phát triển phần mềm'
    },
    {
      id: 'artstuff',
      name: 'ArtStuff',
      logo: `${process.env.PUBLIC_URL}/assets/images/client-artstuffvn.png`,
      alt: 'ArtStuff Creative Agency',
      description: 'Công ty Thiết kế Sáng tạo',
      project: 'Website thương mại điện tử',
      year: '2024',
      category: 'E-commerce'
    }
  ];

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="clients" 
      className="section-padding bg-semantic-primary relative overflow-hidden"
    >
      {/* Enhanced background pattern for visual depth */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Floating background elements for depth */}
      <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-semantic-brand-light/10 rounded-full blur-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}></div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header with animations */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Professional gradient overlays with improved styling */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-semantic-primary via-semantic-primary/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-semantic-primary via-semantic-primary/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Enhanced container with professional Angular Design styling */}
          <div className="bg-semantic-elevated border border-semantic-tertiary shadow-elevation-1 hover:shadow-elevation-2 hover:border-semantic-secondary transition-all duration-normal overflow-hidden group">
            {/* Inner border for layered professional effect */}
            <div className="p-8 md:p-12 border border-semantic-primary/10">
              {/* Scrolling container with improved spacing */}
              <div 
                className="flex items-center gap-16 md:gap-20 lg:gap-24 animate-scroll-professional"
                role="group"
                aria-label="Danh sách khách hàng đối tác"
              >
                {duplicatedClients.map((client, index) => (
                  <div 
                    key={`${client.id}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center group/item cursor-pointer"
                    onMouseEnter={() => setActiveClient(client)}
                    onMouseLeave={() => setActiveClient(null)}
                  >
                    {/* Enhanced logo container with professional hover effects */}
                    <div className="relative p-6 transition-all duration-normal hover:scale-105 group-hover/item:scale-110">
                      <img 
                        src={client.logo} 
                        alt={client.alt}
                        className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-70 group-hover/item:opacity-100 transition-all duration-normal filter grayscale group-hover/item:grayscale-0"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/200x100/f3f4f6/6b7280?text=${encodeURIComponent(client.name)}`;
                        }}
                      />
                      
                      {/* Enhanced glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-normal">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-semantic-brand-light/30 to-transparent blur-xl"></div>
                      </div>

                      {/* Professional tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-semantic-elevated border border-semantic-secondary shadow-elevation-2 px-4 py-3 rounded-lg min-w-max">
                          <div className="text-semantic-primary font-semibold body-sm mb-1">{client.name}</div>
                          <div className="text-semantic-secondary caption">{client.project}</div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                            <span className="text-semantic-tertiary caption">{client.category} • {client.year}</span>
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-semantic-elevated"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced trust indicators with professional stats */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Professional trust indicators with semantic typography */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-semantic-secondary">
            <div className="flex items-center gap-3 hover:text-semantic-primary transition-colors duration-300">
              <div className="w-10 h-10 bg-semantic-brand-light/20 flex items-center justify-center rounded-full">
                <i className="fas fa-shield-alt text-primary icon-sm"></i>
              </div>
              <span className="body-sm font-medium">Bảo mật cấp ngân hàng</span>
            </div>
            <div className="flex items-center gap-3 hover:text-semantic-primary transition-colors duration-300">
              <div className="w-10 h-10 bg-semantic-brand-light/20 flex items-center justify-center rounded-full">
                <i className="fas fa-clock text-primary icon-sm"></i>
              </div>
              <span className="body-sm font-medium">Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center gap-3 hover:text-semantic-primary transition-colors duration-300">
              <div className="w-10 h-10 bg-semantic-brand-light/20 flex items-center justify-center rounded-full">
                <i className="fas fa-certificate text-primary icon-sm"></i>
              </div>
              <span className="body-sm font-medium">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS with professional animations and accessibility */}
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
          animation: scroll-professional 30s linear infinite;
          will-change: transform;
        }
        
        /* Enhanced pause animation on hover for better UX */
        .animate-scroll-professional:hover {
          animation-play-state: paused;
        }
        
        /* Enhanced responsive behavior */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-professional {
            animation: none;
          }
          
          .animate-scroll-professional .group\\/item {
            transform: none !important;
          }
        }

        /* Professional shadow utilities matching design system */
        .shadow-elevation-1 {
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        
        .shadow-elevation-2 {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        /* Enhanced accessibility for screen readers */
        @media (prefers-contrast: high) {
          .opacity-70 {
            opacity: 0.9;
          }
          
          .border-semantic-tertiary {
            border-color: var(--border-secondary);
          }
        }

        /* Professional mobile optimizations */
        @media (max-width: 768px) {
          .animate-scroll-professional {
            animation-duration: 25s;
          }
          
          .gap-16 {
            gap: 2rem;
          }
          
          .gap-20 {
            gap: 2.5rem;
          }
          
          .gap-24 {
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients; 