import { Header } from "./components/nav/header";
import { DorImpacto } from "./sections/DorImpacto";
import { Hero } from "./sections/Hero";
import { Tratamentos } from "./sections/Tratamentos";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DorImpacto />
        <Tratamentos />
      </main>
    </>
  );
}
