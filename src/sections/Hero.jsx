import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { FadeIn } from "../components/motion/fade-in";

export function Hero({ standalone = false }) {
  const heroBg = `${import.meta.env.BASE_URL}images/hero-bg.jpg`;
  const drFelipe = `${import.meta.env.BASE_URL}images/dr-felipe.png`;

  const [headerH, setHeaderH] = useState(0);
  useEffect(() => {
    const measure = () => {
      const h = document.querySelector("header")?.offsetHeight || 0;
      setHeaderH(h);
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, []);

  const minH = standalone
    ? `calc(100svh - ${headerH}px)`
    : `clamp(640px, calc(100svh - var(--header-h)), 860px)`;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden box-border"
      style={{
        ["--header-h"]: `${headerH}px`,
        ["--pad-top"]: "clamp(24px, 5vh, 80px)",
        ["--pad-bottom"]: "clamp(12px, 3vh, 32px)",
        minHeight: minH,
        paddingTop: "var(--pad-top)",
        paddingBottom: "var(--pad-bottom)",
      }}
    >
      {/* BG + overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width="2400"
          height="1400"
          className="h-full w-full object-cover object-[20%_50%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2B45]/90 via-[#0C1C2A]/95 to-[#07111A]/95" />
      </div>

      {/* Conteúdo */}
      <div
        className="
          relative mx-auto min-h-full max-w-7xl px-4
          flex flex-col items-center justify-center gap-8
          md:grid md:grid-cols-[1.15fr_1fr] md:gap-8 md:justify-items-stretch md:place-items-center
        "
      >
        {/* Texto */}
        <FadeIn className="w-full max-w-2xl text-center md:text-left">
          <div className="mb-6 flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <Badge>Minimamente invasivo</Badge>
            <Badge>Tecnologia de ponta</Badge>
            <Badge>Retorno rápido</Badge>
          </div>

          <h1
            id="hero-title"
            className="font-title text-4xl leading-tight md:text-6xl"
          >
            Tratamentos modernos para joelho,{" "}
            <span className="text-accent">sem cirurgia</span> e com{" "}
            <span className="text-accent">resultados rápidos</span>.
          </h1>

          <p className="mt-4 mx-auto max-w-xl text-base text-muted md:mx-0 md:text-lg">
            Protocolos minimamente invasivos e de alta tecnologia para controlar a dor,
            melhorar a mobilidade e devolver sua qualidade de vida.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <Button asChild variant="gold" size="lg" className="shadow font-bold">
              <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20vim%20da%20landing%20page%20sobre%20os%20tratamentos%20e%20gostaria%20de%20saber%20mais." aria-label="Quero agendar minha consulta"
              target="blank">
                QUERO AGENDAR MINHA CONSULTA
              </a>
            </Button>
          </div>
        </FadeIn>

        {/* Retrato */}
        <FadeIn delay={0.15} className="relative md:order-last justify-self-center md:justify-self-end">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-6 -right-8 h-[280px] w-[280px] rounded-[32px] bg-[radial-gradient(closest-side,rgba(46,209,195,0.18),transparent)] blur-2xl md:h-[460px] md:w-[460px] lg:h-[520px] lg:w-[520px]" />
          {/* Card */}
          <div
            className="
              relative overflow-hidden rounded-2xl border border-line/40 bg-bg/50
              shadow-xl backdrop-blur-sm ring-1 ring-white/5
              w-[260px] h-[340px] sm:w-[300px] sm:h-[400px]
              md:w-[380px] md:h-[480px] lg:w-[460px] lg:h-[560px] xl:w-[520px] xl:h-[620px]
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,28,42,0.30)_0%,rgba(12,28,42,0.50)_100%)]" />
            <img
              src={drFelipe}
              alt="Dr. Felipe Brasil — Ortopedista especialista em joelho"
              width="1600"
              height="2000"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain object-center md:object-cover md:object-[center_20%]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}