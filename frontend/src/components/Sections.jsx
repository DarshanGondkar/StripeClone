import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModularInteractive from "./ModularSolutions";

const paymentsGif =
  "https://cdn.dribbble.com/userupload/41915337/file/original-cfbb62646931c1a33ec56d00306a09a1.gif";
const billingGif =
  "https://images.stripeassets.com/fzn2n1nzq965/4oQvQ5j58g13qIkTozToHF/811af3d0202424d4b81dbe67296a5681/Stripe_Elements_source-code.gif";
const connectGif =
  "https://cdn.dribbble.com/userupload/23536806/file/original-71be1a226c7b80f53963e678feb9a4b0.gif";
const issuingGif =
  "https://cdn.dribbble.com/userupload/42244559/file/original-259ef89892a82d825329aced51403cb0.gif";

const sections = [
/*  {
    id: "modular",
    title: "Modular Solutions",
    heading: "A fully integrated suite of financial and payments products",
    description:
      "Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.",
    cta: "Start with Modular",
    seeAlso: [
      "Atlas for company incorporation",
      "Capital for financing solutions",
      "Checkout for easy payment pages",
    ],
    // ✅ Store JSX instead of component reference
    animation: <ModularInteractive />,
    color: "text-blue-500",
  },*/
  {
    id: "payments",
    title: "Payments",
    heading: "Accept and optimise payments, globally",
    description:
      "Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
    cta: "Start with Payments",
    seeAlso: [
      "Tax for automating tax registration, collection, and filing",
      "Radar for AI-powered fraud protection",
      "Terminal for custom in-person payments",
    ],
    animation: <img src={paymentsGif} alt="Payments" />,
    color: "text-purple-500",
  },
  {
    id: "billing",
    title: "Billing",
    heading: "Manage subscriptions and invoicing",
    description:
      "Simplify recurring billing, invoicing, and subscription management with powerful automation.",
    cta: "Start with Billing",
    seeAlso: [
      "Invoicing for fast billing",
      "Revenue recognition for accounting",
      "Smart retries for failed payments",
    ],
    animation: <img src={billingGif} alt="Billing" />,
    color: "text-green-500",
  },
  {
    id: "connect",
    title: "Connect",
    heading: "Build platforms and marketplaces",
    description:
      "Seamlessly onboard sellers and pay them globally while keeping full control of your platform.",
    cta: "Start with Connect",
    seeAlso: [
      "Managed accounts for full control",
      "Custom accounts for platform branding",
      "Express accounts for quick onboarding",
    ],
    animation: <img src={connectGif} alt="Connect" />,
    color: "text-orange-500",
  },
  {
    id: "issuing",
    title: "Issuing",
    heading: "Create and manage virtual and physical cards",
    description:
      "Issue cards programmatically, control spending, and manage your company’s expenses efficiently.",
    cta: "Start with Issuing",
    seeAlso: [
      "Virtual cards for online payments",
      "Physical cards for employees",
      "Controls & rules for better spending management",
    ],
    animation: <img src={issuingGif} alt="Issuing" />,
    color: "text-pink-500",
  },
];

export default function FeaturesSection() {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let index = 0;
      sectionRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          index = i;
        }
      });
      setActiveIndex(index);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full flex justify-center bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row">
        {/* Left content */}
        <div className="md:w-1/2 flex flex-col space-y-40 py-20 px-6 md:px-0">
          {sections.map((section, i) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="min-h-screen flex flex-col justify-center space-y-4"
            >
              <p className={`text-md font-medium ${section.color}`}>
                {section.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                {section.heading}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {section.description}
              </p>
              <button className="bg-blue-500 text-white text-sm px-4 py-2 font-semibold rounded-md w-max">
                {section.cta}
              </button>
              <div className="mt-4 space-y-1 text-gray-500 text-sm">
                {section.seeAlso.map((item, idx) => (
                  <p key={idx} className="hover:text-black cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right animations */}
        <div className="md:w-1/2 sticky top-20 h-screen flex items-center justify-center relative">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              className="absolute w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: i === activeIndex ? 1 : 0,
                y: i === activeIndex ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
            >

              <div className="max-h-[500px] w-full flex items-center justify-center">
                {section.animation}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
