import Apple from "../../components/icons/Apple";
import SpaceX from "../../components/icons/SpaceX";
import Binance from "../../components/icons/Binance";
import Tesla from "../../components/icons/Tesla";

function Companies() {
  return (
    <div className="flex items-center justify-between">
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;
