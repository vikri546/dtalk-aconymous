import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import CircleImage from "./components/CircleImage";
import MahkamahKonstitusi from "./components/MahkamahKonstitusi";
import FirstSection from "./components/FirstSection";
import MobilePhones from "./components/MobilePhones";
import ScienceInnovation from "./components/ScienceInnovation";
import TrendingNow from "./components/TrendingNow";
import TechnologyNews from "./components/TechnologyNews";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <CircleImage />
      <MahkamahKonstitusi />
      <MobilePhones />
      {/* <FirstSection />
      <MobilePhones />
      <ScienceInnovation />
      <TrendingNow />
      <TechnologyNews /> */}
    </div>
  );
}