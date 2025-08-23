import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { BadgeCheck, Cpu, SlidersHorizontal, Timer } from "lucide-react";

const MEDICO_SRC = `${import.meta.env.BASE_URL}images/dr-felipe2.png`;
const MEDICO_ALT = "Dr. Felipe Brasil — Especialista em joelho";

const ITENS = [
  {
    id: "especialista",
    icon: BadgeCheck,
    text:
      "Especialista em joelho com experiência em procedimentos minimamente invasivos, além dos cirúrgicos quando necessário.",
  },
  {
    id: "tecnologia",
    icon: Cpu,
    text: "Tratamentos realizados com tecnologia de ponta.",
  },
  {
    id: "personalizados",
    icon: SlidersHorizontal,
    text: "Protocolos personalizados para cada paciente.",
  },
  {
    id: "resultados",
    icon: Timer,
    text:
      "Foco em resultados rápidos e duradouros, com segurança, conforto e acompanhamento.",
  },
];

function DiferencialItem({ item }) {
  const Icon = item.icon;
  return (
    <CardSpotlight className="w-full">
      <div className="relative flex w-full items-start gap-3 rounded-2xl border border-line/40 bg-bg/60 p-5 shadow-lg backdrop-blur-sm ring-1 ring-white/5">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-bg2/60 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <p className="text-sm leading-relaxed text-text md:text-base">{item.text}</p>
      </div>
    </CardSpotlight>
  );
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="relative">

      <div
        className="
          mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-16
          md:py-20
          lg:grid-cols-[1fr_1.2fr] lg:gap-12
        "
      >
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
                Atendimento especializado em joelho com foco em técnicas minimamente invasivas.
              </figcaption>
            </figure>
          </CardSpotlight>
        </FadeIn>

        <div>
          <FadeIn>
            <div className="max-w-3xl">
              <Badge className="mb-3">Diferenciais</Badge>
              <h2 className="font-title text-3xl md:text-4xl">
                Conheça os diferenciais do nosso atendimento:
              </h2>
            </div>
          </FadeIn>

          <div className="mt-6 space-y-4 md:mt-8">
            {ITENS.map((it, idx) => (
              <FadeIn key={it.id} delay={idx * 0.05}>
                <DiferencialItem item={it} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
