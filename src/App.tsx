import Nav    from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Hero   from "./sections/Hero";
import Work   from "./sections/Work";
import Stack  from "./sections/Stack";
import Focus  from "./sections/Focus";
import About  from "./sections/About";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white antialiased">
      <Nav />

      <main>
        <Hero />

        {/* Hairline separator between hero and content */}
        <div className="mx-auto max-w-[720px] px-6 sm:px-8 lg:px-0">
          <div className="h-px bg-white/[0.06]" />
        </div>

        <Work  />
        <Stack />
        <Focus />
        <About />
      </main>

      <Footer />
    </div>
  );
}
