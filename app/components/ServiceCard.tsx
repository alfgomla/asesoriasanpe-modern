"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({ icon, title, description, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Hover gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500" />
      
      {/* Accent line on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <div className="text-primary group-hover:text-accent transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
          {title}
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}