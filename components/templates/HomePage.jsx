import Atrributes from "../modules/Atrributes";
import Banner from "../modules/Banner";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restriction from "../modules/Restriction";

function HomePage() {
  return (
    <div className="max-w-[900px] m-auto mt-24 max-[900px]:p-5 max-[600px]:p-2">
      <Banner />
      <Atrributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restriction />
    </div>
  );
}

export default HomePage;
