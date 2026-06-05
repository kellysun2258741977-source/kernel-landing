import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CapabilityOrbit from "@/components/CapabilityOrbit";
import PersonalBrand from "@/components/PersonalBrand";
import OneSpace from "@/components/OneSpace";
import ChatDemo from "@/components/ChatDemo";
import AgentGrid from "@/components/AgentGrid";
import Pipeline from "@/components/Pipeline";
import ADay from "@/components/ADay";
import Native from "@/components/Native";
import Compare from "@/components/Compare";
import Integrations from "@/components/Integrations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CapabilityOrbit />
        <PersonalBrand />
        <OneSpace />
        <ChatDemo />
        <AgentGrid />
        <Pipeline />
        <ADay />
        <Native />
        <Compare />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
