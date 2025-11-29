import Hero from "./components/Hero";
import LetterSection from "./components/LetterSection";
import ProposalSection from "./components/ProposalSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <LetterSection />
      <ProposalSection />
    </main>
  );
}
