import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex max-[600px]:flex-col-reverse items-center">
      <div className="flex flex-col mt-[10px] max-[900px]:mt-[10px] max-[600px]:mt-5">
        <h1 className="border-b-2 border-b-green pb-4 font-semibold my-5 mx-0">
          Green Food
        </h1>
        <p className="font-semibold my-4 mx-0">Food Delivery and Takeout!</p>
        <span className="text-grey text-justify">
          BotoFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot. Uber in 2014. Meals are delivered by couriers using
          cars, scooters, bikes, or on foot.
        </span>
        <Link
          className="bg-green text-white px-[30px] py-[10px] w-fit mt-[30px] rounded-md font-bold"
          href="/menu"
        >
          See All
        </Link>
      </div>

      <div className="max-[600px]:text-center ml-6">
        <Image
          src="/images/banner.png"
          alt="Food Image"
          width={750}
          height={500}
          className="max-[900px]:w-[350px] max-[600px]:w-[90%]"
        />
      </div>
    </div>
  );
}

export default Banner;
