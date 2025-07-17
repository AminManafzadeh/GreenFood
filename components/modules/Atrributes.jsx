import Fast from "../../components/icons/Fast";
import Food from "../../components/icons/Food";
import Choice from "../../components/icons/Choice";
import Clock from "../../components/icons/Clock";

function Atrributes() {
  return (
    <div className="mt-24">
      <h3 className="text-2xl text-green my-6 mx-0 font-semibold">Why Us?</h3>
      <div className="flex justify-between items-center max-[900px]:flex-wrap">
        <div className="w-[150px] rounded-xl shadow-green-shadow pt-[25px] px-[20px] pb-[20px] text-center mt-5">
          <Fast />
          <p className="font-bold mt-5">Fast</p>
        </div>
        <div className="w-[150px] rounded-xl shadow-green-shadow pt-[25px] px-[20px] pb-[20px] text-center mt-5">
          <Food />
          <p className="font-bold mt-5">Best Restaurants</p>
        </div>
        <div className="w-[150px] rounded-xl shadow-green-shadow pt-[25px] px-[20px] pb-[20px] text-center mt-5">
          <Choice />
          <p className="font-bold mt-5">Your Choice</p>
        </div>
        <div className="w-[150px] rounded-xl shadow-green-shadow pt-[25px] px-[20px] pb-[20px] text-center mt-5">
          <Clock />
          <p className="font-bold mt-5">24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Atrributes;
