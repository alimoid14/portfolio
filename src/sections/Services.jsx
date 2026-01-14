import React from "react";

const Services = () => {
  return (
    <>
      <div id="services" className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in detail</h3>
        </div>
      </div>
      <div className="relative">
        <div className="bg-black text-white pt-16 pb-160 sticky top-4">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/*Left Side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none ">
                Web Development
              </h2>
            </div>

            {/*Right Side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Developing web apps that are user-friendly, visually appealing,
                and optimized for performance. Ensuring responsive design and
                cross-browser compatibility to provide a seamless experience
                across all devices.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 text-black pt-16 pb-92 sticky top-2/5 md:top-1/3">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/*Left Side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none ">
                API Integration
              </h2>
            </div>

            {/*Right Side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Developing APIs and integrating third-party services to enhance
                functionality. Ensuring secure and efficient data exchange
                between the web app and external systems.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/*Left Side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none ">
                SEO Optimization
              </h2>
            </div>

            {/*Right Side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Implementing SEO best practices to improve search engine
                rankings and increase organic traffic. Optimizing website
                structure, content, and performance to enhance visibility and
                user engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
