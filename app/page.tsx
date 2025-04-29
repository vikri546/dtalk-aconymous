import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import CircleImage from "./components/CircleImage";
import MahkamahKonstitusi from "./components/MahkamahKonstitusi";
import MobilePhones from "./components/MobilePhones";
import ScienceInnovation from "./components/ScienceInnovation";
import TrendingNow from "./components/TrendingNow";
import TechnologyNews from "./components/TechnologyNews";
import EditorsPicks from "./components/EditorPick";
import Subscribe from "./components/Subscribes";
import Footer from "./components/Footter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-opacity duration-300">
      <Navbar />
      <SecondNavbar />
      <CircleImage />
      <MahkamahKonstitusi />
      <MobilePhones />
      <ScienceInnovation />
      <TrendingNow />
      <TechnologyNews />
      <EditorsPicks />
      <Subscribe />
      <Footer />
    </div>
  );
}