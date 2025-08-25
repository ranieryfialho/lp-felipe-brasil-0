import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Button } from "../components/ui/button";

export function ProximoPasso() {
  return (
    <section id="cta-final" className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(60%_120px_at_50%_0%,rgba(102,224,219,0.10),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <CardSpotlight className="w-full">
          <div className="relative overflow-hidden rounded-2xl border border-line/40 bg-[linear-gradient(180deg,rgba(8,38,51,0.85),rgba(7,24,34,0.9))] p-8 shadow-2xl ring-1 ring-white/5 md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(102,224,219,0.14),transparent)] blur-2xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(227,199,160,0.14),transparent)] blur-2xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <FadeIn>
                <h2 className="font-title text-3xl leading-tight md:text-4xl">
                  O próximo passo é seu!
                </h2>
              </FadeIn>

              <div className="mt-4 space-y-3 text-muted md:mt-6">
                <FadeIn delay={0.05}>
                  <p>Você não precisa conviver com dor no joelho.</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p>
                    A avaliação com o Dr. Felipe Brasil vai identificar a causa e indicar
                    o tratamento mais seguro e eficaz para o seu caso.
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={0.15}>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild variant="gold" className="w-full sm:w-auto font-bold">
                    <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20vim%20da%20landing%20page%20sobre%20os%20tratamentos%20e%20gostaria%20de%20saber%20mais." target="blank" aria-label="Agendar avaliação com o especialista">
                      AGENDAR AVALIAÇÃO
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="#faq">Tirar dúvidas rápidas</a>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}
