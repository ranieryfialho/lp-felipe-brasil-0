import * as React from "react";
import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Tanciana Nunes",
    tag: "Ácido Hialurônico",
    rating: 5,
    text: "Uma experiência maravilhosa. Depois de alguns anos de muitas dores no joelho fiz um procedimento de aplicação de ácido com o Dr Felipe Brasil e a melhora foi milagrosa. O atendimento fisioterápico com a Ana Laís tá sendo perfeito. Uma profissional fantástica sempre preocupada com o meu bem estar e minha recuperação. Um trabalho que transformando minha vida!",
    avatar: "", // "/images/depoimentos/maria-a.jpg"
  },
  {
    id: "t2",
    name: "Denise Aguiar",
    tag: "Bloqueio de Nervos",
    rating: 5,
    text: "Além de ótimos profissional, Dr Felipe Brasil trata com atenção e precisão o alívio da Dor.E dicas para administrar os movimentos  no dia a dia!recomendo!",
    avatar: "",
  },
  {
    id: "t3",
    name: "Gaucia Rocha",
    tag: "Radioablação",
    rating: 5,
    text: "Dr Felipe me tirou de uma crise que pensei não ter jeito. Adorando tbm  o atendimento do meu fisio Dr Bruno . Obrigada",
    avatar: "",
  },
  {
    id: "t4",
    name: "Marcelo Memoria",
    tag: "Laserterapia",
    rating: 4,
    text: "Sensacional. Profissional atencioso, preparado e com muito conhecimento técnico.",
    avatar: "",
  },
  {
    id: "t5",
    name: "Renata Viana",
    tag: "BMA (Células-tronco)",
    rating: 5,
    text: "Plano personalizado e ganho real de mobilidade. Experiência muito positiva.",
    avatar: "",
  },
];

function RatingStars({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "h-4 w-4",
            i < value ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/40",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function Avatar({ name, src }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`Foto de ${name}`}
        className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
        loading="lazy"
        decoding="async"
        width="72"
        height="72"
      />
    );
  }
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bg2/60 ring-1 ring-white/10">
      <span className="text-xs font-medium text-text">{initials}</span>
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <CardSpotlight className="h-full w-full">
      <article className="relative flex h-full w-full flex-col rounded-2xl border border-line/40 bg-bg/60 p-5 shadow-lg backdrop-blur-sm ring-1 ring-white/5">
        <div className="flex items-center justify-between gap-3">
          <RatingStars value={item.rating} />
          <span className="inline-flex items-center gap-1 rounded-full border border-line/40 bg-bg2/50 px-2 py-0.5 text-[11px] text-muted">
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            {item.tag}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-text">
          <Quote className="mr-1 inline-block h-4 w-4 translate-y-[-1px] text-muted" />
          {item.text}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <Avatar name={item.name} src={item.avatar} />
          <div className="text-xs">
            <div className="font-medium text-text">{item.name}</div>
            <div className="text-muted">Paciente verificado</div>
          </div>
        </div>
      </article>
    </CardSpotlight>
  );
}

export function Depoimentos() {
  const listRef = React.useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = listRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-card]");
    const step = firstCard ? firstCard.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="relative overflow-hidden">
      {/* Background com padrão geométrico médico */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg2/20 to-bg" />
      
      {/* Padrão de hexágonos */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2366E0DB' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Padrão de linhas cruzadas sutis */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2366E0DB' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Elementos moleculares flutuantes */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-accent/5 flex items-center justify-center animate-pulse">
        <div className="w-2 h-2 rounded-full bg-accent/10 animate-ping" />
      </div>
      <div className="absolute top-32 right-16 w-16 h-16 rounded-full border border-accent/5 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-20 left-32 w-12 h-12 rounded-full border border-accent/5 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-accent/10 animate-ping" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full border border-accent/5 animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Elementos flutuantes com movimento lento */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-accent/5 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-accent/5 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-1/4 left-3/4 w-8 h-8 rounded-full bg-accent/5 animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      
      {/* Partículas pequenas com movimento */}
      <div className="absolute top-20 right-1/4 w-2 h-2 rounded-full bg-accent/10 animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute bottom-40 left-1/3 w-1 h-1 rounded-full bg-accent/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-20 w-3 h-3 rounded-full bg-accent/10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <FadeIn>
          <div className="max-w-3xl">
            <Badge className="mb-3">Depoimentos</Badge>
            <h2 className="font-title text-3xl md:text-4xl">O que nossos pacientes dizem</h2>
            <p className="mt-3 text-muted">
              Relatos reais de quem buscou controle da dor e recuperação funcional com
              protocolos minimamente invasivos.
            </p>
          </div>
        </FadeIn>

        {/* Layout Mobile: Carrossel */}
        <div className="mt-8 md:hidden">
          <div className="relative mb-14">
            <div
              ref={listRef}
              className="
                flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2
                [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              "
              aria-label="Depoimentos de pacientes (carrossel)"
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} data-card className="w-[85%] shrink-0 snap-start">
                  <TestimonialCard item={t} />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-3">
              <Button
                size="icon"
                variant="outline"
                className="pointer-events-auto h-8 w-8"
                onClick={() => scrollByCard(-1)}
                aria-label="Anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="pointer-events-auto h-8 w-8"
                onClick={() => scrollByCard(1)}
                aria-label="Próximo"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Layout Desktop: Grid como no croqui */}
        <div className="mt-10 hidden md:block">
          {/* Primeira linha: 3 cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <FadeIn delay={0.02}>
              <TestimonialCard item={TESTIMONIALS[0]} />
            </FadeIn>
            <FadeIn delay={0.04}>
              <TestimonialCard item={TESTIMONIALS[1]} />
            </FadeIn>
            <FadeIn delay={0.06}>
              <TestimonialCard item={TESTIMONIALS[2]} />
            </FadeIn>
          </div>

          {/* Segunda linha: 2 cards centralizados */}
          <div className="flex justify-center gap-6">
            <div className="w-full max-w-[calc((100%-3rem)/3)]">
              <FadeIn delay={0.08}>
                <TestimonialCard item={TESTIMONIALS[3]} />
              </FadeIn>
            </div>
            <div className="w-full max-w-[calc((100%-3rem)/3)]">
              <FadeIn delay={0.10}>
                <TestimonialCard item={TESTIMONIALS[4]} />
              </FadeIn>
            </div>
          </div>
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="gold" className="font-bold">
              <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20vim%20da%20landing%20page%20sobre%20os%20tratamentos%20e%20gostaria%20de%20saber%20mais." target="blank" aria-label="Quero agendar minha consulta">
                QUERO AGENDAR MINHA CONSULTA
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}