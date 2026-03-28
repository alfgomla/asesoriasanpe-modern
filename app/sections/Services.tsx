import { ScrollReveal } from "../components/ScrollReveal";
import { ServiceCard } from "../components/ServiceCard";
import { Building2, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Gestión SAT",
    description: "Te asistimos con citas, trámites de RFC, emisión de CSF, facturación, e.firma, selección de régimen fiscal y corrección de CURP.",
    features: ["RFC y CSF", "E.firma", "Facturación electrónica", "Corrección de CURP", "Cambio de régimen fiscal"],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Constitución de Empresas",
    description: "Brindamos asesoría integral para la apertura de empresas desde la autorización de denominación social hasta la alta en el RFC.",
    features: ["Autorización de nombre", "Acta constitutiva", "Registro en RFC", "Avisos y liberaciones", "Alta en IMSS"],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Registro de Marcas",
    description: "Te asesoramos en el registro legal de tu marca para proteger tu propiedad intelectual con total seguridad y respaldo.",
    features: ["Búsqueda de disponibilidad", "Registro de marca", "Renovaciones", "Licencias de uso", "Defensa de marca"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-neutral-50">
      <div className="container-custom mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">
            Soluciones integrales para tu negocio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Especialistas en trámites gubernamentales con más de 15 años de experiencia en Querétaro
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}