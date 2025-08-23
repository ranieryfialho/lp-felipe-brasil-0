import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu, Stethoscope } from "lucide-react";
import { cn } from "../../lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#tratamentos", label: "Tratamentos" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#especialista", label: "Sobre" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerHeight = 80; // altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/40 bg-gradient-to-br from-[#0F2B45]/80 via-[#0C1C2A]/92 to-[#07111A]/92 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5 text-accent" />
          <span className="font-title text-lg">Dr. Felipe Brasil</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="gold" className="ml-2">
            <a href="#contato" aria-label="Agendar consulta">Agendar consulta</a>
          </Button>
        </nav>

        <button
          className={cn(
            "md:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors",
            scrolled
              ? "border border-line/60 bg-transparent hover:bg-bg2/40"
              : "border border-transparent bg-transparent hover:bg-bg2/30"
          )}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line/40 bg-gradient-to-br from-[#0F2B45]/85 via-[#0C1C2A]/95 to-[#07111A]/95">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-sm text-muted hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="gold" className="w-full mt-1">
              <a href="#contato" onClick={() => setOpen(false)}>Agendar consulta</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}