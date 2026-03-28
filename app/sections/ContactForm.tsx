"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../components/ScrollReveal";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const services = ["SAT - RFC y CSF", "Constitución de empresas", "Registro de marcas", "E.firma", "Otro"];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contacto" className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-12"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">¡Mensaje enviado!</h3>
            <p className="text-gray-600 mb-6">
              Gracias por contactarnos. Olivia o un miembro de nuestro equipo se comunicará contigo en menos de 24 horas.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-accent hover:text-accent-dark font-semibold"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section-padding bg-neutral-50">
      <div className="container-custom mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Cuéntanos sobre tu caso
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Respuesta garantizada en menos de 24 horas. Asesoría inicial sin costo.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
                          {/* onSubmit={handleSubmit}  agregar a form si se desea configurar por Ajax*/}
            <form action="https://formspree.io/f/xzdkebve" method="POST" className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Tu nombre" name="name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="tu@email.com" name="email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="442 123 4567" name="Telefono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="Servicio"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Describe tu caso o duda
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos qué necesitas..." name="message" required
                />
              </div>

              <div className="flex items-start gap-3 mb-6">
                <input
                  type="checkbox"
                  required
                  id="privacy"
                  className="mt-1 w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la <a href="#" className="text-accent hover:underline">política de privacidad</a> y el tratamiento de mis datos para responder a mi solicitud.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Solicitar información
                  </>
                )}
              </button>
            </form>

          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Olivia Pérez</h3>
              <p className="text-gray-300 mb-6">Especialista en gestoría legal y administrativa</p>
              
              <div className="space-y-4">
                <a href="tel:+524411153676" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>441 115 3676</span>
                </a>
                <a href="mailto:lic.oliviape@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-sm">lic.oliviape@gmail.com</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Ezequiel Montes, Querétaro, Qro.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm">Lun - Vie: 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href="https://wa.me/524411153676?text=Hola%20Olivia,%20me%20interesa%20una%20asesoría"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">¿Prefieres WhatsApp?</p>
                  <p className="text-sm text-white/80">Escríbenos directamente</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}