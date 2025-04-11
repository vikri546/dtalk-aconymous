import Navbar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar";
import CircleImage from "./components/CircleImage";
import MahkamahKonstitusi from "./components/MahkamahKonstitusi";
import MobilePhones from "./components/MobilePhones";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <SecondNavbar />
      <CircleImage />
      <MahkamahKonstitusi />
      <MobilePhones />
    </div>
  );
}