import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Lumina Despertar" className="h-12 mb-3 brightness-0 invert opacity-90" />
            <div className="w-10 h-px bg-accent/50 mb-3" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Consultorio psicológico dedicado a tu bienestar emocional y crecimiento personal.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-1 tracking-wide">Contacto</h4>
            <div className="w-10 h-px bg-accent/50 mb-3" />
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-accent/70 shrink-0" /> +52 55 4113 7017
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-accent/70 shrink-0" /> luminadespertar.psi@gmail.com
              </div>
              <a
                href="https://www.google.com/maps/dir//Metro+Normal,+Ciudad+de+M%C3%A9xico"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary-foreground transition-colors duration-300"
              >
                Colonia Agricultura, CP 11360, Ciudad de México (cerca de Metro Normal)
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-1 tracking-wide">Síguenos</h4>
            <div className="w-10 h-px bg-accent/50 mb-3" />
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/share/1HTLWNLDj2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Lumina Despertar. Todos los derechos reservados.</p>
          <p>
            Hecho con ☕ y código por{" "}
            <a
              href="https://www.mrares259.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground transition-colors duration-300"
            >
              Mrares259
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
