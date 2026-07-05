import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+52 55 4113 7017" },
  { icon: Mail, label: "Email", value: "luminadespertar.psi@gmail.com" },
  { icon: MapPin, label: "Dirección", value: "Col. Agricultura, Ciudad de México CP 11360" },
  { icon: Clock, label: "Horarios", value: "Lunes - Domingo: 8:00 AM - 10:00 PM" },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacto" className="relative py-28 bg-secondary/30 bg-linen overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Contacto
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 tracking-tight">
            ¿Lista para dar el primer paso?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No dudes en comunicarte. Estoy aquí para acompañarte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactInfo.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className={`group text-center p-7 rounded-2xl bg-background/80 backdrop-blur-sm shadow-sm border border-border/30 cursor-default
                transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-gold-glow hover:border-accent/30
                ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-full border-2 border-accent/40 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:border-accent/70 group-hover:bg-accent/10 group-hover:scale-105">
                <Icon
                  size={22}
                  className="text-accent transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
              <p className="text-muted-foreground text-sm break-words">{value}</p>
            </div>
          ))}
        </div>

        {/* Map with golden frame */}
        <div
          className={`mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-accent/20 shadow-lg ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <iframe
            title="Ubicación Metro Normal, Ciudad de México"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Metro+Normal,Ciudad+de+Mexico&center=19.44468,-99.16705&zoom=16"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
