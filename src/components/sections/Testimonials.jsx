import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: '"Lean HRM đã giải quyết triệt để các vấn đề tồn đọng trong quản trị nhân sự của chúng tôi. Báo cáo chính xác hơn 87%, giảm 62% thời gian xử lý hồ sơ và tiết kiệm 48% chi phí quản trị. Đầu tư thực sự xứng đáng với doanh nghiệp chúng tôi."',
      author: 'Nguyễn Thanh Diệu',
      position: 'Giám đốc nhân sự, Công ty CiCC',
      avatar: 'https://placehold.co/100x100/1331d2/white?text=ND'
    },
    {
      id: 2,
      content: '"Giải pháp ERP của LeanTechCo mang lại kết quả đo lường được: dữ liệu liên kết xuyên suốt, giảm 53% sai sót vận hành, tiết kiệm 45% thời gian báo cáo. Lãnh đạo chúng tôi ra quyết định nhanh hơn và chính xác hơn dựa trên dữ liệu thời gian thực."',
      author: 'Nguyễn Thanh Phong',
      position: 'Chief Strategy Officer, CTIVN',
      avatar: 'https://placehold.co/100x100/1331d2/white?text=NP'
    },
    {
      id: 3,
      content: '"Không chỉ là phần mềm, mà là giải pháp hoàn chỉnh để tối ưu hóa quy trình của doanh nghiệp. Tích hợp dữ liệu từ nhiều nguồn khác nhau, cung cấp báo cáo chi tiết, và hỗ trợ đắc lực trong việc ra quyết định chiến lược."',
      author: 'Trần Văn Minh',
      position: 'Giám đốc điều hành, ArtStuff',
      avatar: 'https://placehold.co/100x100/1331d2/white?text=TM'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Câu Chuyện <span className="gradient-text">Thành Công</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Kết quả thực tế từ đối tác tin cậy của LeanTechCo
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-quote-left text-xl"></i>
              </div>
            </div>

            {/* Testimonial content */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 