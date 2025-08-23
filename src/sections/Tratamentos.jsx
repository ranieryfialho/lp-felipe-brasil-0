import { FadeIn } from "../components/motion/fade-in";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Modal } from "../components/ui/dialog";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import {
  Droplets,
  Activity,
  Flame,
  Snowflake,
  Dna,
  SunMedium,
} from "lucide-react";

const CARDS = [
  {
    id: "acido-hialuronico",
    icon: Droplets,
    title: "Ácido Hialurônico",
    subtitle: "Lubrificação e alívio da dor",
    chips: ["No consultório", "Alívio em dias"],
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/tratamentos/acido-hialuronico-equipamento.PNG`,
        alt: "Equipamento para aplicação de ácido hialurônico",
        caption: "Aplicação guiada por ultrassom para maior precisão"
      }
    ],
    details: (
      <div className="space-y-4 text-sm text-muted">
        <p>
          Indicado para desgaste da cartilagem (artrose, condromalácia), age como um
          "lubrificante" para a articulação, reduzindo atrito e melhorando a mobilidade.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Procedimento rápido, no consultório.</li>
          <li>Alívio perceptível dos sintomas em poucos dias.</li>
        </ul>
        <div className="mt-4">
          <h4 className="font-semibold text-text mb-2">Como funciona:</h4>
          <p className="text-xs text-muted">
            O ácido hialurônico é injetado diretamente na articulação do joelho, 
            restaurando a viscosidade do líquido sinovial e proporcionando 
            lubrificação natural.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "bloqueio-geniculares",
    icon: Activity,
    title: "Bloqueio de Nervos Geniculares",
    subtitle: "Desligando o sinal da dor",
    chips: ["Alívio rápido", "Sem cirurgia"],
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/tratamentos/bloqueio-equipamento.jpeg`,
        alt: "Equipamento de radiofrequência para bloqueio",
        caption: "Tecnologia de radiofrequência de última geração"
      }
    ],
    details: (
      <div className="space-y-4 text-sm text-muted">
        <p>
          Aplicação de anestésico e anti-inflamatório nos nervos que transmitem a dor do
          joelho para o cérebro.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Alívio rápido das dores, já sentido no próprio consultório.</li>
          <li>
            Indicado para quem não pode ou não deseja submeter-se a uma cirurgia invasiva,
            ou para quem quer se livrar das dores de forma rápida e segura.
          </li>
        </ul>
        <div className="mt-4">
          <h4 className="font-semibold text-text mb-2">Duração do alívio:</h4>
          <p className="text-xs text-muted">
            O procedimento pode proporcionar alívio por 3 a 6 meses, 
            podendo ser repetido conforme necessário.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "ablacao",
    icon: Flame,
    icon2: Snowflake,
    title: "Radioablação / Crioablação",
    subtitle: "Controle prolongado da dor crônica",
    chips: ["Efeito prolongado", "Alta no dia"],
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/tratamentos/radioablacao-equipamento.jpg`,
        alt: "Equipamento de radioablação",
        caption: "Sistema de radiofrequência para ablação precisa"
      }
    ],
    details: (
      <div className="space-y-4 text-sm text-muted">
        <p>
          Técnicas minimamente invasivas que "desativam" temporariamente os nervos da dor,
          usando calor (radioablação) ou frio extremo (crioablação).
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Efeito de meses a anos.</li>
          <li>Realizado em centro cirúrgico com alta no mesmo dia.</li>
        </ul>
        <div className="mt-4">
          <h4 className="font-semibold text-text mb-2">Diferenças entre as técnicas:</h4>
          <p className="text-xs text-muted">
            <strong>Radioablação:</strong> Usa calor controlado (80°C) para interromper sinais de dor.<br />
            <strong>Crioablação:</strong> Usa frio extremo (-70°C) com resultado similar.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "bma",
    icon: Dna,
    title: "BMA (Células-tronco)",
    subtitle: "Regeneração com suas próprias células",
    chips: ["Regenerativo", "Pode adiar cirurgia"],
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/tratamentos/bma-coleta.jpg`,
        alt: "Processo de coleta de medula óssea",
        caption: "Coleta minimamente invasiva da medula óssea"
      }
    ],
    details: (
      <div className="space-y-4 text-sm text-muted">
        <p>
          Coleta de células da medula óssea para estimular a regeneração da cartilagem e
          tecidos do joelho.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Potencial regenerativo natural.</li>
          <li>Pode adiar ou evitar cirurgias maiores.</li>
        </ul>
        <div className="mt-4">
          <h4 className="font-semibold text-text mb-2">Processo completo:</h4>
          <p className="text-xs text-muted">
            1. Coleta da medula óssea<br />
            2. Concentração das células-tronco<br />
            3. Aplicação guiada por imagem na articulação
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "laser",
    icon: SunMedium,
    title:
      "Laserterapia de Alta Intensidade (Fotobiomodulação)",
    subtitle: "Acelera a recuperação e alivia os sintomas",
    chips: ["Indolor", "Sessões rápidas"],
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/tratamentos/laser-equipamento.jpg`,
        alt: "Equipamento de laser de alta intensidade",
        caption: "Sistema de laser classe IV para fotobiomodulação"
      }
    ],
    details: (
      <div className="space-y-4 text-sm text-muted">
        <p>
          Uso de feixes de luz para aumentar a circulação, reduzir inflamação e estimular
          a regeneração tecidual.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Indolor e rápido.</li>
          <li>Melhora já nas primeiras sessões.</li>
        </ul>
        <div className="mt-4">
          <h4 className="font-semibold text-text mb-2">Mecanismo de ação:</h4>
          <p className="text-xs text-muted">
            O laser estimula a produção de ATP celular, acelera a cicatrização 
            e reduz marcadores inflamatórios de forma natural.
          </p>
        </div>
      </div>
    ),
  },
];

function Chip({ children }) {
  return (
    <span className="rounded-full border border-line/50 bg-bg2/50 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

function TratamentoCard({ item, className = "" }) {
  const Icon = item.icon;
  const Icon2 = item.icon2;

  return (
    <CardSpotlight className={`w-full h-full ${className}`}>
      <div className="relative flex h-full w-full flex-col rounded-2xl border border-line/40 bg-bg/60 shadow-lg backdrop-blur-sm ring-1 ring-white/5 overflow-hidden">
        {/* Imagem no topo */}
        {item.images && item.images[0] && (
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={item.images[0].src}
              alt={item.images[0].alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            
            {/* Ícones sobrepostos no canto inferior da imagem */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg/80 backdrop-blur-sm ring-1 ring-white/20">
                <Icon className="h-4 w-4 text-accent" />
              </div>
              {Icon2 && (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg/80 backdrop-blur-sm ring-1 ring-white/20">
                  <Icon2 className="h-4 w-4 text-accent2" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Conteúdo textual */}
        <div className="flex flex-1 flex-col p-5">
          {/* Títulos */}
          <h3 className="font-title text-lg md:text-xl leading-snug text-text">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{item.subtitle}</p>

          {/* Chips */}
          {item.chips?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          ) : null}

          {/* Ações */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            <Modal
              title={item.title}
              trigger={
                <Button variant="outline" className="font-medium">
                  Saiba mais
                </Button>
              }
            >
              <div className="space-y-6">
                {/* Imagem expandida no modal */}
                {item.images && item.images[0] && (
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg bg-bg2/50 aspect-[16/9] flex items-center justify-center">
                      <img
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />
                    </div>
                    <p className="text-xs text-muted text-center">
                      {item.images[0].caption}
                    </p>
                  </div>
                )}
                
                {/* Conteúdo detalhado */}
                <div>{item.details}</div>
                
                {/* Call to action no modal */}
                <div className="pt-4 border-t border-line/30">
                  <Button asChild variant="gold" className="w-full font-bold">
                    <a href="#contato">Quero este tratamento</a>
                  </Button>
                </div>
              </div>
            </Modal>
            <Button asChild variant="gold" className="font-bold">
              <a href="#contato">Quero este tratamento</a>
            </Button>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}

export function Tratamentos() {
  return (
    <section id="tratamentos" className="relative overflow-hidden">
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
            <Badge className="mb-3">Tratamentos</Badge>
            <h2 className="font-title text-3xl md:text-4xl">
              Protocolos com foco em resultado
            </h2>
            <p className="mt-3 text-muted">
              Cada procedimento tem uma indicação específica, e todos são aplicados com o
              objetivo de reduzir a dor, preservar a função e acelerar a recuperação.
            </p>
          </div>
        </FadeIn>

        {/* Layout responsivo conforme o croqui */}
        <div className="mt-10">
          {/* Mobile: 1 coluna */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {CARDS.map((card, index) => (
              <FadeIn key={card.id} delay={0.02 * (index + 1)}>
                <TratamentoCard item={card} />
              </FadeIn>
            ))}
          </div>

          {/* Desktop: Primeira linha com 3 cards, segunda linha com 2 centralizados */}
          <div className="hidden md:block">
            {/* Primeira linha: 3 cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <FadeIn delay={0.02}>
                <TratamentoCard item={CARDS[0]} />
              </FadeIn>
              <FadeIn delay={0.04}>
                <TratamentoCard item={CARDS[1]} />
              </FadeIn>
              <FadeIn delay={0.06}>
                <TratamentoCard item={CARDS[2]} />
              </FadeIn>
            </div>

            {/* Segunda linha: 2 cards centralizados */}
            <div className="flex justify-center gap-6">
              <div className="w-full max-w-[calc((100%-3rem)/3)]">
                <FadeIn delay={0.08}>
                  <TratamentoCard item={CARDS[3]} />
                </FadeIn>
              </div>
              <div className="w-full max-w-[calc((100%-3rem)/3)]">
                <FadeIn delay={0.10}>
                  <TratamentoCard item={CARDS[4]} />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}