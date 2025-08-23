import { FadeIn } from "../components/motion/fade-in";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { AlertCircle, CheckCircle2 } from "lucide-react";

function Item({ children }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5">
        <AlertCircle className="h-4 w-4 text-accent" />
      </span>
      <span className="text-muted">{children}</span>
    </li>
  );
}

function TriedChip({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-line/50 bg-bg2/50 px-3 py-1 text-xs text-muted">
      <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
      {children}
    </span>
  );
}

export function DorImpacto() {
  return (
    <section id="dor-impacto" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1.15fr_1fr] md:items-center">
          {/* LADO ESQUERDO — EMPATIA + CONTEXTO */}
          <FadeIn className="w-full max-w-2xl text-center md:text-left">
            <Badge className="mb-3">Dor e Impacto no dia a dia</Badge>
            <h2 className="font-title text-3xl md:text-4xl">
              Quando o joelho falha, tudo parece mais difícil.
            </h2>

            <p className="mt-3 text-muted">
              Subir escadas, caminhar alguns quarteirões, ficar muito tempo em
              pé ou levantar da cadeira — a dor limita sua rotina e tira a
              qualidade de vida.
            </p>

            <ul className="mt-6 space-y-3 text-left max-w-lg mx-auto md:mx-0">
              <Item>Subir e descer escadas sem precisar parar no meio.</Item>
              <Item>Caminhar no mercado, parque ou no trabalho sem dor.</Item>
              <Item>Ficar em pé por mais tempo sem rigidez e travamentos.</Item>
              <Item>Levantar da cadeira ou do carro com segurança.</Item>
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-sm text-muted">Você já tentou:</span>
              <TriedChip>Medicamentos</TriedChip>
              <TriedChip>Repouso</TriedChip>
              <TriedChip>Fisioterapia</TriedChip>
            </div>

            <p className="mt-3 text-muted">
              Se nada disso resolveu de forma duradoura, existem protocolos{" "}
              <span className="text-text">minimamente invasivos</span> que
              podem ajudar.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <Button asChild variant="gold" className="font-bold">
                <a href="#tratamentos" aria-label="Ver opções de tratamento">
                  Ver opções de tratamento
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* LADO DIREITO — PAIN CARD COM SPOTLIGHT (Magic UI) */}
          <FadeIn delay={0.1} className="w-full flex justify-center">
            <div className="w-full">
              <CardSpotlight>
                <div className="relative overflow-hidden rounded-2xl border border-line/40 bg-bg/60 p-6 shadow-xl backdrop-blur-sm ring-1 ring-white/5">
                  <div className="absolute -top-16 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(46,209,195,0.12),transparent)] blur-2xl" />
                  <h3 className="font-title text-xl">Como isso impacta você?</h3>
                  <p className="mt-2 text-sm text-muted">
                    Dor crônica não é "frescura" — ela muda postura, sono,
                    humor e desempenho.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-line/40 bg-bg2/50 p-4">
                      <div className="text-2xl font-title text-text">7—10/10</div>
                      <div className="mt-1 text-xs text-muted">nível de dor em crises</div>
                    </div>
                    <div className="rounded-xl border border-line/40 bg-bg2/50 p-4">
                      <div className="text-2xl font-title text-text">3+ meses</div>
                      <div className="mt-1 text-xs text-muted">tempo de sintomas</div>
                    </div>
                    <div className="rounded-xl border border-line/40 bg-bg2/50 p-4">
                      <div className="text-2xl font-title text-text">Mobilidade</div>
                      <div className="mt-1 text-xs text-muted">rigidez / articulação trava</div>
                    </div>
                    <div className="rounded-xl border border-line/40 bg-bg2/50 p-4">
                      <div className="text-2xl font-title text-text">Atividades</div>
                      <div className="mt-1 text-xs text-muted">casa, trabalho e lazer</div>
                    </div>
                  </div>

                  <p className="mt-5 text-xs text-muted">
                    *Autoavaliação inicial. O plano adequado é definido em consulta.
                  </p>
                </div>
              </CardSpotlight>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}