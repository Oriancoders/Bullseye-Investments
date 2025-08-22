import React from "react";
import Hero from "./sections/Hero";
import WhatIsMetaTrader from "./sections/WhatIsMetaTrader";
import WhyWithBullseye from "./sections/WhyWithBullseye";
import Download from "./sections/Download";
import HowToTrade from "./sections/HowToTrade";
import Navigation from "../../commonComps/Navigation";
import Footer from "../../commonComps/Footer";

export default function MetaTrader() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <Navigation/>
      <Hero />
      <WhatIsMetaTrader />
      <WhyWithBullseye />
      <Download />
      <HowToTrade />
      <Footer/>
    </div>
  );
}
