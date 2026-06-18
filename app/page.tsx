import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Composed from "./components/Composed";
import Pyramid from "./components/Pyramid";
import Collection from "./components/Collection";
import Counter from "./components/Counter";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Composed />
      <Pyramid />
      <Collection />
      <Counter />
      <Visit />
      <Footer />

      {/* Mobile money button — no phone confirmed, so it points to the shop visit */}
      <a
        href="#visit"
        aria-label="Find the shop on Main St"
        className="md:hidden fixed bottom-5 right-5 z-50 call-pill inline-flex items-center gap-2 rounded-full bg-coffee/95 px-4 py-3 text-[0.8rem] tracking-wide text-parchment shadow-[0_12px_30px_-10px_rgba(58,42,30,0.7)]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brass" />
        Visit
      </a>
    </main>
  );
}
