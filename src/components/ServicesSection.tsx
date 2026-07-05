import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Users, Monitor, Brain, Baby, Flower2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: User,
    title: "Terapia Individual",
    description:
      "Sesiones personalizadas enfocadas en tu bienestar emocional, autoconocimiento y crecimiento personal.",
    showExpertiseStar: true,
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description:
      "Fortalece tu relación a través de una comunicación más efectiva y la resolución de conflictos.",
  },
  {
    icon: Monitor,
    title: "Terapia Online",
    description:
      "Sesiones desde la comodidad de tu hogar con la misma calidad y profesionalismo.",
  },
  {
    icon: Brain,
    title: "Adiós a la Ansiedad y el Insomnio",
    description:
      "Descubre estrategias probadas para superar estas problemáticas y retomar el control de tu vida.",
  },
  {
    icon: Baby,
    title: "Terapia Infantil",
    description:
      "Acompañamiento especializado para el desarrollo emocional saludable de los más pequeños.",
  },
  {
    icon: Flower2,
    title: "Hipnosis Clínica",
    description:
      "Neurociencias aplicadas para liberarte tanto de heridas emocionales y traumas como de enfermedades importantes como cáncer, diabetes y problemas de tiroides.",
    showExpertiseStar: true,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="relative py-28 bg-secondary/30 bg-linen overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Servicios
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-foreground mb-4 tracking-tight">
            ¿Cómo puedo ayudarte?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de atención adaptadas a tus necesidades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, description, showExpertiseStar }, i) => (
            <Card
              key={title}
              className={`group relative border-border/40 bg-background/80 backdrop-blur-sm
                hover:border-accent/40 hover:shadow-gold-glow hover:-translate-y-1.5
                transition-all duration-500 ease-out ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {showExpertiseStar && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}
              {showExpertiseStar && (
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-accent/10 text-accent px-2.5 py-1 rounded-full border border-accent/20">
                  <Sparkles size={11} className="fill-current" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Especialidad
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full border-2 border-accent/40 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/70 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-accent transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
