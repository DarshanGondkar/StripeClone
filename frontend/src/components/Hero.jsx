import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5f6d] via-[#ffc371] to-[#24c6dc] animate-gradient bg-[length:200%_200%]" />

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-400 rounded-full mb-4 shadow-md">
            Preview
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Financial infrastructure <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-transparent bg-clip-text">
              to grow your revenue
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
          </p>
          
        <a
  href="https://stripe.com/in/contact/sales"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition">
    Request an invite
  </button>
</a>

        </div>

    {/* Right Content */}
<div className="flex-1 mt-12 lg:mt-0 flex justify-center relative z-10">
  <div className="flex gap-6 items-center">

    <img
      src="https://www.angosa.com/assets/images/placeholder.png"
      alt="Checkout"
      className="h-[350px] w-auto rounded-2xl shadow-2xl object-contain"
    />
    <img
      src="https://cdn.prod.website-files.com/66eafaec075d9e2e60131f0c/6799d6be221f4b7736516c17_670d4176186d1c6cbad6573f_AD_4nXevBBXbB1COrdo3_FO2zgIw1VQ9wZsn-hMf-PZJEmZJ4VsxPW_Kw-ohsUpxr4wkp-EqbtN8h80pnY08WM1lwmP_l5nXAsLweJAbixE49zFTwWro3hC8q1qZdtgw_YXD_Y7DtZftIXtcVkB4815crlMR9fQ.png"
      alt="Dashboard"
      className="h-[350px] w-auto rounded-2xl shadow-2xl object-contain"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
