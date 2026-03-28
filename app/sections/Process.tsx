"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { MessageSquare, FolderOpen, FileCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consulta inicial",
    description: "Evaluamos tu caso de forma gratuita y te explicamos los requisitos necesarios para tu trámite específico.",
  },
  {
    icon: FolderOpen,
    number: "02",
    title: "Documentación",
    description: "Recopilamos y organizamos toda la documentación requerida, asegurando que cumpla con las normativas vigentes.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Trámite",
    description: "Gestionamos directamente ante las instancias correspondientes (SAT, IMPI, Secretaría de Economía, etc.).",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Entrega",
    description: "Recibes tus documentos completos y listos para usar, con seguimiento post-entrega para cualquier duda.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-primary text-white">
      <div className="container-custom mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Proceso simple y transparente
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Cuatro pasos para resolver tus trámites administrativos sin complicaciones
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute top-0 right-1/4 w-8 h-8 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}