export default function LowCodeOptions() {
  const options = [
    {
      title: "Use a pre-integrated platform",
      description:
        "Explore our directory to find out-of-the-box solutions that connect with Stripe, such as Squarespace and Lightspeed.",
      link: "View partners →",
        img :"https://images.stripeassets.com/fzn2n1nzq965/wEsTNDVgdEqaPAKkFdqnL/c69e1649432f1b772d86d81e423b7e3e/buttons.svg?q=80"   ,
    },
    {
      title: "Build with Stripe-certified experts",
      description:
        "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions for you.",
      link: "View partners →",
      img: "https://images.stripeassets.com/fzn2n1nzq965/5C5LvT3YZvRTGYn7uabXGj/7da8063dc77c67b7f66a1479f47409c8/build_with_stripe.svg?q=80", 
    },
    {
      title: "Try our no-code products",
      description:
        "Set up usage-based billing, accept an in-person payment with your phone, or share a payment link directly from your Dashboard to start generating revenue in minutes – no code required.",
      link: "Learn more →",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfB1zhCgJRktzhDCwL7iv3AXlUk6y8iVtpgI6i_U2XWE9aBaSA", 
    },
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Low- and no-code options for getting started
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          If you'd like to use Stripe for your business but don’t have
          developers on staff, no problem. We have a few options depending on
          your needs.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition overflow-hidden"
            >
              {/* Image on top */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={opt.img}
                  alt={opt.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {opt.title}
                </h3>
                <p className="text-gray-600 mb-4">{opt.description}</p>
                <a href="#" className="text-blue-600 font-medium">
                  {opt.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
