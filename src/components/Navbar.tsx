import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL = "https://wa.me/message/J2EODMHICX5ZM1";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (!href.startsWith("#")) return;

    // If we are not on the home page, navigate to / with the hash.
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const show = !hidden || hovered || window.scrollY <= 0;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-transform duration-500 ease-out"
      style={{ transform: show ? "translateY(0)" : "translateY(calc(-100% - 1rem))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <nav className="mx-auto max-w-6xl bg-background/80 backdrop-blur-xl border border-border/60 rounded-2xl shadow-lg shadow-black/[0.03]">
        <div className="px-6 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Lumina Despertar" className="h-12 md:h-14" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300"
                >
                  {link.label}
                </button>
              )
            )}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full px-7 shadow-gold-glow hover:shadow-gold-glow-lg transition-shadow duration-300">
                Agendar Cita
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border/40 px-6 pb-5 pt-3 space-y-1">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-2.5 text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              )
            )}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button className="w-full rounded-full shadow-gold-glow">Agendar Cita</Button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
