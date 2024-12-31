// import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Curved overlay */}
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <div
          style={{
            clipPath: "ellipse(90% 100% at 70% 50%)",
          }}
          className="absolute inset-0 bg-gray-100"
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="lg:pr-8">
            <h2 className="text-emerald-500 font-medium uppercase tracking-wide">
              We are expert team
            </h2>
            <h1 className="mt-4 text-5xl font-bold text-gray-900 leading-tight">
              We create products that makes peoples{" "}
              <span className="text-sky-600">lives</span>
            </h1>
            <div className="mt-8">
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                Free Consultation
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="relative mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
