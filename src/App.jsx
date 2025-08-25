import { Header } from "./components/nav/header";
import { DorImpacto } from "./sections/DorImpacto";
import { Hero } from "./sections/Hero";
import { Tratamentos } from "./sections/Tratamentos";
import { Beneficios } from "./sections/Beneficios";
import { Diferenciais } from "./sections/Diferenciais";
import { Depoimentos } from "./sections/Depoimentos";
import { Especialista } from "./sections/Especialista";
import { ProximoPasso } from "./sections/ProximoPasso";
import { FAQ } from "./sections/FAQ";
import { Localizacao } from "./sections/Localizacao";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DorImpacto />
        <Tratamentos />
        <Beneficios />
        <Diferenciais />
        <Depoimentos />
        <Especialista />
        <ProximoPasso />
        <Localizacao />
        <FAQ />
      </main>
    </>
  );
}