import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyQSI from "../components/WhyQSI";
import QSIAdvantage from "../components/QSIAdvantage";
import MarketOpportunity from "../components/MarketOpportunity";
import TechnologyPlatform from "../components/TechnologyPlatform";
import StrategicPartners from "../components/StrategicPartners";
import InvestmentOpportunity from "../components/InvestmentOpportunity";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />

    <main>

  <Hero />

  <WhyQSI />

  <QSIAdvantage />

  <MarketOpportunity />

  <TechnologyPlatform />

  <TeamSection />

  <StrategicPartners />

  <InvestmentOpportunity />

  <Footer />

</main>
    </>
  );
}