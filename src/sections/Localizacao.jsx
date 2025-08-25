import { FadeIn } from "../components/motion/fade-in";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const CLINICA_ENDERECO = "Rua Felipe Nery, 1012 - Guararapes, Fortaleza - CE, 60821-775";
const GMAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3392434937943!2d-38.48588402592751!3d-3.760282996328478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7461438018e69%3A0x6ce52e9079a4254b!2sR.%20Felipe%20Nery%2C%201012%20-%20Guararapes%2C%20Fortaleza%20-%20CE%2C%2060810-020!5e0!3m2!1spt-BR!2sbr!4v1724618453745!5m2!1spt-BR!2sbr";

export function Localizacao() {
  return (
    <section id="localizacao" className="relative border-t border-line/30">
      <div className="mx-auto max-w-7xl px-4 pt-16 md:pt-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-3">Nossa Localização</Badge>
            <h2 className="font-title text-3xl md:text-4xl">
              Onde nos encontrar
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
              <p className="text-muted">{CLINICA_ENDERECO}</p>
            </div>
            <p className="mt-4 text-sm text-muted">
              Nossa clínica está localizada em uma área de fácil acesso, com estacionamento disponível para sua comodidade.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold" className="w-full sm:w-auto font-bold">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Felipe+Nery,1012,Guararapes,Fortaleza,CE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Traçar rota para a clínica"
                  className="inline-flex items-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Traçar Rota
                </a>
              </Button>
               <Button asChild variant="outline" className="w-full sm:w-auto">
                 <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20vim%20da%20landing%20page%20sobre%20os%20tratamentos%20e%20gostaria%20de%20saber%20mais." target="blank" aria-label="Agendar avaliação com o especialista">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-12">
          <div className="w-full h-[450px] md:h-[500px]">
            <iframe
              src={GMAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica no Google Maps"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}