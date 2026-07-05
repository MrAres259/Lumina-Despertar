import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import lilianaPhoto from "@/assets/liliana-photo.png";

const WHATSAPP_URL = "https://wa.me/message/J2EODMHICX5ZM1";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-linen"
      style={{
        background: "linear-gradient(160deg, hsl(35 30% 96%), hsl(35 28% 91%), hsl(36 32% 86%))",
      }}
    >
      {/* Decorative ambient shapes */}
      <div className="absolute top-32 right-1/4 w-80 h-80 rounded-full bg-accent/[0.07] blur-3xl animate-gold-shimmer" />
      <div className="absolute bottom-32 left-10 w-[28rem] h-[28rem] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-accent/[0.05] blur-2xl" />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* ── Left column: text ── */}
          <div className="animate-fade-in-up max-w-xl md:ml-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-5 py-2 text-sm font-medium mb-8 border border-primary/10">
              <Sparkles size={15} />
              Consultorio Psicológico
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-[1.1] mb-6 tracking-tight">
              Tu despertar{" "}
              <span className="text-primary italic">comienza</span>{" "}
              aquí
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              En Lumina Despertar te acompañamos en tu camino hacia el{" "}
              <span className="font-bold text-primary">BIENESTAR</span> en todas las áreas
              vitales, con calidez, profesionalismo y un enfoque centrado en ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full px-10 text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Agendar Cita
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 text-base border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                onClick={() =>
                  document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Conóceme
              </Button>
            </div>
          </div>

          {/* ── Right column: therapist photo ── */}
          <div className="hidden md:flex justify-center animate-slide-in-right" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              {/* Gold accent frame offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-accent/30" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-accent/40 rounded-tl-3xl" />

              {/* Photo container */}
              <div className="relative aspect-[3/4] w-80 lg:w-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src={lilianaPhoto}
                  alt="Dra. Liliana Carpio Torres - Psicóloga Clínica"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
