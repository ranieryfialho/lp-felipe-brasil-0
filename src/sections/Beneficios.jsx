import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { CheckCircle2 } from "lucide-react";

// Lista esquerda
const ITENS = [
  { id: "inv", text: "São minimamente invasivos — sem cortes e sem internação." },
  { id: "dor", text: "Buscam reduzir ou eliminar a dor." },
  { id: "func", text: "Aceleram a recuperação funcional." },
  { id: "ret", text: "Possibilitam retorno mais rápido às atividades do dia a dia." },
];

// Mini-infográfico
const STATS = [
  { id: "s1", title: "Sem cortes", desc: "Minimamente invasivos" },
  { id: "s2", title: "Menos dor", desc: "Redução / eliminação" },
  { id: "s3", title: "Recup. funcional", desc: "Acelera o retorno" },
  { id: "s4", title: "Retorno rápido", desc: "Dia a dia" },
];

function ListItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/10">
        <CheckCircle2 className="h-4 w-4 text-accent" />
      </span>
      <span className="text-sm leading-relaxed text-text md:text-base">{children}</span>
    </li>
  );
}

function StatsRight() {
  return (
    <CardSpotlight className="h-full w-full">
      <div className="relative grid h-full w-full grid-cols-2 gap-4 rounded-2xl border border-line/40 bg-bg/60 p-6 shadow-lg backdrop-blur-sm ring-1 ring-white/5">
        {STATS.map((s) => (
          <div
            key={s.id}
            className="rounded-xl border border-line/40 bg-bg2/50 p-4 ring-1 ring-white/10"
          >
            <div className="text-lg font-title text-text">{s.title}</div>
            <div className="text-xs text-muted">{s.desc}</div>
          </div>
        ))}
      </div>
    </CardSpotlight>
  );
}

export function Beneficios() {
  return (
    <section id="beneficios" className="relative">
      <div
        className="
          mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16
          md:py-20 md:gap-10
          lg:grid-cols-2
        "
      >

        <div>
          <FadeIn>
            <h2 className="font-title text-3xl md:text-4xl">
              O que todos esses tratamentos têm em comum?
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <ul className="mt-6 space-y-3 md:mt-8 md:space-y-4" role="list">
              {ITENS.map((it) => (
                <ListItem key={it.id}>{it.text}</ListItem>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <StatsRight />
        </FadeIn>
      </div>
    </section>
  );
}
