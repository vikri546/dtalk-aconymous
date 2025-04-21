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

export default function Layout() {
  return (
    <div>
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