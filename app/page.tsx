import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import CircleImage from "./components/CircleImage";
import MahkamahKonstitusi from "./components/MahkamahKonstitusi";
import MobilePhones from "./components/MobilePhones";
import ScienceInnovation from "./components/ScienceInnovation";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <CircleImage />
      <MahkamahKonstitusi />
      <MobilePhones />
      <ScienceInnovation />
    </div>
  );
}