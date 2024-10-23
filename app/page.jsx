import Card from "@components/Card";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Seperater from "@components/Seperater";
import cardsData from "@data/cardsData";
import { useMemo } from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Seperater />
      <div className="cardCon" id="shop-section">
        {cardsData.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
