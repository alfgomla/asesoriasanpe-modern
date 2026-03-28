import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Gestión SAT", href: "#servicios" },
    { label: "Constitución de empresas", href: "#servicios" },
    { label: "Registro de marcas", href: "#servicios" },
    { label: "E.firma", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos de servicio", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Asesoría <span className="text-accent">Sanpé</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Especialistas en gestoría legal y administrativa en Querétaro. Más de 15 años ayudando a empresas y personas con sus trámites gubernamentales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Centro Histórico<br />
                  Santiago de Querétaro, Qro.<br />
                  México
                </span>
              </li>
              <li>
                <a href="tel:+524421234567" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors text-sm">
                  <Phone className="w-5 h-5 text-accent" />
                  442 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:contacto@asesoriasanpe.com.mx" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors text-sm">
                  <Mail className="w-5 h-5 text-accent" />
                  contacto@asesoriasanpe.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Asesoría Sanpé. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-500 hover:text-accent text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}