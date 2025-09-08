import { useState, useEffect } from "react";

export default function EnterpriseReinvention() {
  const slides = [
    {
      src: "https://images.stripeassets.com/fzn2n1nzq965/4zeFefnpB8yh7U3qSQRktP/d583ee93dd3d8910fa27296748699a0f/bmw-landscape.png?q=80&fm=webp&w=918",
      link: "https://stripe.com/in/newsroom/news/bmw-and-stripe",
      alt: "BMW Stripe Case Study",
    },
    {
      src: "https://media.assettype.com/tnm/import/sites/default/files/amazon_1200_picxy_0.jpg?w=480&auto=format,compress&fit=max",
      link: "https://unsplash.com/photos/beach",
      alt: "Beach View",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      link: "https://unsplash.com/photos/city",
      alt: "City View",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h4 className="text-sm font-semibold text-purple-600 mb-2">
            Enterprise reinvention
          </h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bring agility to your enterprise
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Quickly build great payments experiences, improve performance,
            expand into new markets, and engage customers with subscriptions and
            marketplaces. Get expert integration guidance from our professional
            services team and certified partners, and connect Stripe to
            Salesforce, SAP, and more through the Stripe App Marketplace.
          </p>
          <a
            href="#"
            className="inline-block px-5 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
          >
            Explore Stripe for enterprises →
          </a>
        </div>

        {/* Right content Image Carousel */}
        <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
          <a
            href={slides[current].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={slides[current].src}
              alt={slides[current].alt}
              className="w-full h-64 object-cover transition-all duration-700"
            />
          </a>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-semibold">
              Learn why BMW chose Stripe to power e-commerce and payments
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
