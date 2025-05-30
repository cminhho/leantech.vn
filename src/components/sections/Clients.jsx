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
    <section id="clients" className="py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Clients Label */}
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold">
              KHÁCH HÀNG
            </span>
          </div>
          
          {/* Title */}
          <h2 className="section-title-sm">
            Đồng Hành Cùng Doanh Nghiệp
          </h2>
        </div>

        {/* Scrolling Client Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edge effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex items-center gap-12 md:gap-16 animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/160x80/e5e7eb/6b7280?text=${encodeURIComponent(client.name)}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients; 