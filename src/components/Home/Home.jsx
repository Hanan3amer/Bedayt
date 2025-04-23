import { Element } from "react-scroll";
import Header from "../Header/Header";
import Targetgroup from "../Targetgroup/Targetgroup";
import Services from "../Services/Services";
import Specialists from "../Specialists/Specialists";
import Appointment from "../Appointment/Appointment";
import Clients from "../clients/Clients";
import Contact from "../Contact/Contact";
import Frame from "../Frame/Frame";
import About from "../About/About";

export default function Home() {
  return (
    <div>
      <Header />
      <Targetgroup />
      <About />
      <Services />
      <Specialists />
      <Clients />
      <Appointment />
      <Contact />
      <Frame />
    </div>
  );
}
