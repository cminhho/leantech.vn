import React from 'react';

const Clients = () => {
  const clients = [
    {
      id: 'cicc',
      name: 'CICC',
      logo: 'https://placehold.co/200x100/1331d2/white?text=CICC',
      alt: 'CICC Logo'
    },
    {
      id: 'ctivn',
      name: 'CTI VN',
      logo: 'https://placehold.co/200x100/1331d2/white?text=CTI+VN',
      alt: 'CTI VN Logo'
    },
    {
      id: 'artstuff',
      name: 'ArtStuff',
      logo: 'https://placehold.co/200x100/1331d2/white?text=ArtStuff',
      alt: 'ArtStuff Logo'
    },
    {
      id: 'client4',
      name: 'Client 4',
      logo: 'https://placehold.co/200x100/1331d2/white?text=Client+4',
      alt: 'Client 4 Logo'
    },
    {
      id: 'client5',
      name: 'Client 5',
      logo: 'https://placehold.co/200x100/1331d2/white?text=Client+5',
      alt: 'Client 5 Logo'
    },
    {
      id: 'client6',
      name: 'Client 6',
      logo: 'https://placehold.co/200x100/1331d2/white?text=Client+6',
      alt: 'Client 6 Logo'
    }
  ];

  return (
    <section id="clients" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            Đối Tác
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Đối Tác & Khách Hàng <span className="gradient-text">Tiêu Biểu</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hợp tác bền vững, tạo ra giá trị thực tế và đo lường được
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={client.logo} 
                alt={client.alt} 
                className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">53%</div>
            <p className="text-gray-600">Giảm chi phí vận hành hệ thống</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">45%</div>
            <p className="text-gray-600">Giảm thời gian báo cáo</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">87%</div>
            <p className="text-gray-600">Tăng độ chính xác dữ liệu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 