import React from 'react';

const TechPartnerships = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png'
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png'
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1024px-Google_Cloud_logo.svg.png'
    },
    {
      name: 'ReactJS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png'
    },
    {
      name: 'Docker',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1024px-Docker_%28container_engine%29_logo.svg.png'
    },
    {
      name: 'Java',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1024px-Java_programming_language_logo.svg.png'
    },
    {
      name: 'C#',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1024px-C_Sharp_wordmark.svg.png'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1024px-Postgresql_elephant.svg.png'
    },
    {
      name: 'OpenAI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png'
    }
  ];

  // Duplicate the array for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 border">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-primary text-sm font-semibold">
              CÔNG NGHỆ
            </span>
          </div>

          <h2 className="section-title-sm">
            Nền Tảng Công Nghệ
          </h2>
        </div>

        {/* Animated Logo Grid */}
        <div className="overflow-hidden">
          <div 
            className="flex items-center gap-12 md:gap-16"
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'fit-content'
            }}
          >
            {allPartners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TechPartnerships; 