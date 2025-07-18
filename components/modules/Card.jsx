import Image from "next/image";
import Location from "../../components/icons/Location";
import Dollar from "../../components/icons/Dollar";
import Link from "next/link";

function Card({ data }) {
  return (
    <div className="flex flex-col w-[270px] shadow-green-shadow mb-10 p-[10px] rounded-[10px] relative">
      <Image
        className="w-full rounded-md"
        src={`/images/${data.id}.jpeg`}
        alt={data.name}
        width={300}
        height={200}
      />
      <div className="flex items-baseline justify-between text-grey text-sm my-[22px] mx-0">
        <h4 className="text-green font-medium">{data?.name}</h4>
        <div className="flex items-center">
          <Location />
          {data?.details[0].Cuisine}
        </div>
      </div>
      <div className="flex items-center justify-start">
        <Dollar />
        {data?.discount ? (
          <span className="text-red">
            {(data?.price * (100 - data?.discount)) / 100}$
          </span>
        ) : (
          <span>{data?.price}$</span>
        )}
        {data?.discount ? (
          <div className="bg-red text-white p-1 rounded-[5px] border-[3px] border-white absolute top-[15px] left-[15px]">
            {data?.discount}%
          </div>
        ) : null}
      </div>
      <button>
        <Link
          className="text-white block bg-green w-full text-center mt-5 py-[5px] rounded-[5px]"
          href={`/menu/${data?.id}`}
        >
          See Details
        </Link>
      </button>
    </div>
  );
}

export default Card;
