import { motion } from "framer-motion";

const cards = [
  {
    title: "AI",
    description:
      "Stripe supports businesses across the AI ecosystem – from usage-based billing for AI assistants like Perplexity to premium subscriptions for infrastructure providers like OpenAI.",
  },
  {
    title: "SaaS",
    description:
      "Enable smooth recurring transactions, subscription billing, and flexible pricing models for SaaS businesses worldwide.",
  },
  {
    title: "Marketplaces",
    description:
      "Enabling smooth transactions across global marketplaces with secure, scalable infrastructure.",
  },
  {
    title: "E-Commerce",
    description:
      "Build powerful online commerce experiences with fast, reliable Stripe payments.",
  },
  {
    title: "Platforms",
    description:
      "Support platforms to grow their ecosystem efficiently with embedded financial services.",
  },
  {
    title: "Global Businesses",
    description:
      "Scale across regions with multi-currency support, localized payments, and compliance built in.",
  },
];

export default function BusinessSupport() {
return (
    <section className="bg-white py-20 px-8 relative overflow-hidden">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 ">
            <h2 className="text-4xl font-bold text-gray-900">
                Support for any business type
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                From global AI companies to category-defining marketplaces, successful
                businesses across industries grow and scale with Stripe.
            </p>
        </div>

        {/* Draggable Horizontal Cards */}
        <motion.div
            className="flex gap-8 cursor-grab"
            drag="x"
            dragConstraints={{ left: -900, right: 0 }}
        >
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="min-w-[300px] max-w-[320px] bg-white shadow-lg rounded-2xl border border-gray-200 p-6 relative"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-2xl"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-4">
                        {card.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{card.description}</p>
                </div>
            ))}
        </motion.div>
    </section>
);
}
