import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Heart, Clock } from "lucide-react";
import lilianaPhoto from "@/assets/liliana-photo.png";

const highlights = [
  { icon: GraduationCap, label: "Licenciada en Psicología por la Universidad Nacional Autónoma de México" },
  { icon: GraduationCap, label: "Cursando la Maestría en Hipnosis Clínica" },
  { icon: Clock, label: "Más de 15 años de experiencia" },
  { icon: Heart, label: "Enfoque Cognitivo Conductual" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre-mi" className="py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Photo */}
          <div className={`md:col-span-2 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
            <div className="relative">
              {/* Gold accent corners */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent/50 rounded-br-2xl" />

              <div className="aspect-[3/4] rounded-2xl bg-secondary overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-border/30">
                <img
                  src={lilianaPhoto}
                  alt="Dra. Liliana Carpio Torres - Psicóloga Clínica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`md:col-span-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Sobre Mí
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-medium text-foreground mb-2 tracking-tight">
              Dra. Liliana Carpio Torres
            </h2>
            <p className="text-sm text-muted-foreground mb-8">Cédula Profesional: 14981262</p>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Soy psicóloga clínica con más de 15 años de experiencia acompañando a personas en
              su proceso de autoconocimiento y bienestar en todas las esferas de su vida. Mi
              enfoque terapéutico es el cognitivo conductual combinando herramientas poderosas
              proveniente de la Hipnosis Clínica con un método único en el mundo que te permiten
              sanar traumas emocionales y enfermedades físicas para alcanzar tu máximo potencial y
              éxito en tu vida.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border-l-2 border-accent/50 hover:shadow-gold-glow hover:bg-secondary/60 transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${300 + i * 120}ms` }}
                >
                  <Icon size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
