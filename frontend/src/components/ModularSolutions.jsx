import React, { useState } from "react";
import { motion } from "framer-motion";

const nodeLabels = [
  { id: "capital", label: "Capital", link: "/capital", color: "#3b82f6" },
  { id: "treasury", label: "Treasury", link: "/treasury", color: "#22c55e" },
  { id: "issuing", label: "Issuing", link: "/issuing", color: "#6366f1" },
  { id: "atlas", label: "Atlas", link: "/atlas", color: "#f59e0b" },
  { id: "checkout", label: "Checkout", link: "/checkout", color: "#ef4444" },
  { id: "radar", label: "Radar", link: "/radar", color: "#0ea5e9" },
  { id: "connect", label: "Connect", link: "/connect", color: "#9acbe2" },
  { id: "identity", label: "Identity", link: "/identity", color: "#5b1661" },
  { id: "sigma", label: "Sigma", link: "/sigma", color: "#8ed64a" },
  { id: "climate", label: "Climate", link: "/climate", color: "#14b8a6" },
  { id: "payment", label: "Payment", link: "/payment", color: "#9333ea" },
];

// center of the circle
const centerX = 250;
const centerY = 200; 
const radius = 140; 

// orbit nodes in a circle
const nodes = nodeLabels.map((node, i) => {
  const angle = (i / nodeLabels.length) * (2 * Math.PI);
  const x = centerX + radius * Math.cos(angle) - 40;
  const y = centerY + radius * Math.sin(angle) - 30;
  return { ...node, x, y };
});

export default function ModularSolution() {
  const [hovered, setHovered] = useState(null);

  // Stripe hub node
  const stripeNode = {
    id: "stripe",
    label: "Stripe",
    x: centerX - 40,
    y: centerY - 30,
    width: 80,
    height: 60,
    color: "#000000",
    link: "https://stripe.com/in",
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6">
      {/* Left content */}
      <div className="md:w-1/2 flex flex-col space-y-4 max-w-lg">
        <p className="text-blue-500 font-medium">Modular Solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          A fully integrated suite of financial and payments products
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform.
          Use Stripe to handle all of your payments-related needs, manage revenue operations,
          and launch (or invent) new business models.
        </p>
        <button className="bg-blue-500 text-white text-sm px-4 py-2 font-semibold rounded-md w-max">
          Start with Modular
        </button>
        <div className="mt-4 space-y-1 text-gray-500 text-sm">
          <p className="hover:text-black cursor-pointer">Atlas for company incorporation</p>
          <p className="hover:text-black cursor-pointer">Capital for financing solutions</p>
          <p className="hover:text-black cursor-pointer">Checkout for easy payment pages</p>
        </div>
      </div>

      {/* Right animation */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <motion.svg
          width="500"
          height="400"
          viewBox="0 0 500 400"
          className="bg-white"
        >
          {/* Stripe center node */}
          <motion.g
            key={stripeNode.id}
            onClick={() => (window.location.href = stripeNode.link)}
            className="cursor-pointer"
          >
            <motion.rect
              x={stripeNode.x}
              y={stripeNode.y}
              width={stripeNode.width}
              height={stripeNode.height}
              rx="12"
              fill="#fff"
              stroke={stripeNode.color}
              strokeWidth="2"
            />
            <text
              x={stripeNode.x + stripeNode.width / 2}
              y={stripeNode.y + stripeNode.height / 2 + 5}
              textAnchor="middle"
              fill={stripeNode.color}
              fontSize="16"
              fontWeight="700"
            >
              {stripeNode.label}
            </text>
          </motion.g>

          {/* orbiting nodes */}
          {nodes.map((node) => (
            <motion.g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => (window.location.href = node.link)}
              className="cursor-pointer"
            >
              <motion.rect
                x={node.x}
                y={node.y}
                width="80"
                height="60"
                rx="12"
                fill={hovered === node.id ? node.color : "#fff"}
                stroke={node.color}
                strokeWidth="2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <text
                x={node.x + 40}
                y={node.y + 35}
                textAnchor="middle"
                fill={hovered === node.id ? "#fff" : node.color}
                fontSize="14"
                fontWeight="600"
              >
                {node.label}
              </text>
            </motion.g>
          ))}

          {/* connecting animated line */}
          {hovered &&
            nodes.map((node) =>
              node.id === hovered ? (
                <motion.line
                  key={node.id}
                  x1={node.x + 40}
                  y1={node.y + 30}
                  x2={centerX}
                  y2={centerY}
                  stroke={node.color}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : null
            )}
        </motion.svg>
      </div>
    </section>
  );
}
