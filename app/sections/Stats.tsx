"use client";

import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { FileCheck, Building2, Users, Award } from "lucide-react";

const stats = [
  {
    icon: FileCheck,
    value: 1200,
    suffix: "+",
    label: "Trámites exitosos",
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Empresas constituidas",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Tasa de éxito",
  },
  {
    icon: Award,
    value: 15,
    suffix: "",
    label: "Años de experiencia",
  },
];

export function Stats() {
  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className={`flex flex-col items-center text-center p-6 ${
                index !== stats.length - 1 ? "lg:border-r lg:border-gray-200" : ""
              }`}>
                <stat.icon className="w-8 h-8 text-accent mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}