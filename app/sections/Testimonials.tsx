"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Empresario",
    location: "Querétaro",
    content: "Olivia resolvió mi trámite del SAT en 3 días cuando llevaba meses atorado. Super profesional y siempre disponible para resolver dudas.",
    rating: 5,
  },
  {
    name: "María González",
    role: "Dueña de restaurante",
    location: "San Juan del Río",
    content: "Constituimos nuestro restaurante sin ningún contratiempo. El proceso fue rápido y nos explicaron cada paso. Totalmente recomendados.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Director de startup",
    location: "Querétaro",
    content: "Registraron nuestra marca ante el IMPI sin problemas. El seguimiento constante nos dio mucha tranquilidad durante todo el proceso.",
    rating: 5,
  },
  {
    name: "Ana Patricia López",
    role: "Contadora independiente",
    location: "Corregidora",
    content: "Excelente servicio para trámites de e.firma y actualización de RFC. Muy eficientes y precios justos.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="section-padding bg-neutral-100">
      <div className="container-custom mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />

          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-primary text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[current].role} • {testimonials[current].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current ? "w-6 bg-accent" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}