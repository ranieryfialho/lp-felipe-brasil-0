import * as React from "react";
import { FadeIn } from "../components/motion/fade-in";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: "avaliacao",
    q: "Como funciona a avaliação com o especialista?",
    a: "A consulta é focada em entender sua dor, histórico e objetivos. Se necessário, solicitamos exames e já discutimos as opções terapêuticas com prós/contras. Caso seja indicado, procedimentos minimamente invasivos podem ser programados com rapidez e segurança."
  },
  {
    id: "minimamente-invasivo",
    q: "O que são tratamentos minimamente invasivos?",
    a: "São técnicas que não exigem corte ou internação. Normalmente realizados em consultório ou centro cirúrgico ambulatorial, com recuperação mais rápida e retorno precoce às atividades."
  },
  {
    id: "pos-procedimento",
    q: "Como é a recuperação após os procedimentos?",
    a: "Em geral, o retorno às atividades cotidianas é rápido. Você recebe orientações claras, sinais de alerta e, quando necessário, um plano de reabilitação para acelerar a recuperação funcional."
  },
  {
    id: "cobertura",
    q: "Atendem convênios ou é apenas particular?",
    a: "O atendimento é particular, mas fornecemos a documentação para reembolso quando aplicável. Em caso de dúvida sobre convênio/reembolso, nossa equipe ajuda você a verificar as possibilidades."
  },
  {
    id: "agendamento",
    q: "Como agendar minha consulta?",
    a: "Você pode agendar diretamente pelo botão de contato, falar com nossa equipe no WhatsApp ou usar o formulário na seção de contato da página."
  },
  {
    id: "duracao",
    q: "Quanto tempo duram os efeitos dos tratamentos?",
    a: "Varia conforme o tratamento e o paciente. Ácido hialurônico pode durar 6-12 meses, bloqueios 3-6 meses, e ablações podem ter efeito prolongado de meses a anos. Discutimos isso na consulta."
  }
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex items-center justify-between gap-4 hover:text-accent transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-text pr-4">{item.q}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-muted shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-muted leading-relaxed pr-8">
          {item.a}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = React.useState("");

  const toggleItem = (id) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="font-title text-3xl md:text-4xl mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Tire suas dúvidas sobre os tratamentos, procedimentos e agendamento
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-bg/60 backdrop-blur-sm rounded-2xl border border-line/40 shadow-lg">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <div className="bg-bg2/30 rounded-xl p-6 mb-6">
              <h3 className="font-title text-xl mb-2">Ainda tem dúvidas?</h3>
              <p className="text-muted mb-4">
                Nossa equipe está pronta para esclarecer qualquer questão específica sobre seu caso
              </p>
              <Button asChild variant="gold" className="font-bold">
                <a href="https://api.whatsapp.com/send/?phone=5585994326619&text=Ol%C3%A1%21+Vim+do+site+de+tratamentos+do+joelho+e+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0" target="blank">
                  Falar com especialista
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}