import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const MEDICO_SRC = `${import.meta.env.BASE_URL}images/dr-felipe3.png`;
const MEDICO_ALT = "Dr. Felipe Brasil — Ortopedista especialista em joelho";

export function Especialista() {
  return (
    <section id="especialista" className="relative">
      <div
        className="
          mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 pb-24
          md:py-20 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-12
        "
      >
        {/* ESQUERDA — Foto do médico */}
        <FadeIn>
          <CardSpotlight className="h-full w-full">
            <figure className="relative overflow-hidden rounded-2xl border border-line/40 bg-bg/60 shadow-lg ring-1 ring-white/5">
              <div className="absolute -top-16 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(102,224,219,0.12),transparent)] blur-2xl" />
              <div className="aspect-[4/5] w-full">
                <img
                  src={MEDICO_SRC}
                  alt={MEDICO_ALT}
                  width="1400"
                  height="1750"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-muted">
                Atendimento humanizado com foco em técnicas minimamente invasivas.
              </figcaption>
            </figure>
          </CardSpotlight>
        </FadeIn>

        {/* DIREITA — Título + copy + CTA */}
        <div className="text-center md:text-left">
          <FadeIn>
            <div className="max-w-3xl mx-auto md:mx-0">
              <Badge className="mb-3">Sobre o especialista</Badge>
              <h2 className="font-title text-3xl md:text-4xl">
                Dr. Felipe Brasil — Ortopedista Especialista em Joelho
              </h2>
            </div>
          </FadeIn>

          <div className="mt-6 space-y-4 text-muted md:mt-8">
            <FadeIn delay={0.05}>
              <p>
                Com anos de experiência no diagnóstico e tratamento das mais diversas
                lesões e doenças do joelho, o Dr. Felipe Brasil se dedica a oferecer
                soluções modernas, seguras e personalizadas para cada paciente.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Sua atuação é focada em tratamentos minimamente invasivos, sempre com o
                objetivo de reduzir a dor, melhorar a mobilidade e devolver a qualidade de
                vida, evitando, sempre que possível, procedimentos mais agressivos ou
                cirurgias de grande porte.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p>
                Além de estar em constante atualização nas mais recentes técnicas e
                tecnologias, o Dr. Felipe acredita que cada paciente merece um cuidado
                humanizado e próximo, onde as decisões de tratamento são tomadas em
                conjunto, com total clareza e segurança.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex justify-center md:justify-start">
              <Button asChild variant="gold" className="font-bold">
                <a href="https://api.whatsapp.com/send/?phone=5585994326619&text=Ol%C3%A1%21+Vim+do+site+de+tratamentos+do+joelho+e+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0" aria-label="Agendar avaliação com o especialista" target="blank">
                  Agendar avaliação com o especialista
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}