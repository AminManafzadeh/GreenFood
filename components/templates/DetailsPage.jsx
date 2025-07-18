import Image from "next/image";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage({ data }) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;

  return (
    <div className="max-w-[900px] mt-[100px] m-auto max-[900px]:p-5 max-[600px]:p-2">
      <h2 className="border-b-[5px] border-b-green w-fit mb-12 text-3xl">
        Details
      </h2>
      <div>
        <div className="flex max-[600px]:flex-col">
          <Image
            priority
            className="w-[300] rounded-[10px] max-[600px]:w-full max-[600px]:mb-5"
            src={`/images/${id}.jpeg`}
            alt={name}
            width={300}
            height={250}
          />
          <div className="ml-7 max-[600px]:m-0">
            <h3 className="text-sm text-green">{name}</h3>
            <span className="flex items-center mt-5 mb-10 text-grey">
              {<Location />}
              {details[0].Cuisine}
            </span>
            <span className="flex items-center">
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}
            </span>
            {discount ? (
              <span className="bg-red text-white py-[10px] flex justify-center rounded-[5px] mt-5">
                {discount}$ OFF
              </span>
            ) : null}
          </div>
        </div>

        <div className="text-justify my-14 leading-[25px]">
          <p>{introduction}</p>
        </div>

        <div className="mb-14">
          <h4 className="text-green text-base my-6 font-semibold">Details</h4>
          <ul className="flex flex-col  my-3">
            {details?.map((detail, index) => (
              <li key={index} className="flex items-center gap-2 my-2">
                <span
                  className="text-[#53c60b] text-
                +lg"
                >
                  •
                </span>
                <div className="flex">
                  <p className="text-sm font-semibold mx-[10px]">
                    {Object.keys(detail)[0]} :
                  </p>
                  <span className="text-grey">{Object.values(detail)[0]}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-14">
          <h4 className="text-green text-base my-6 font-semibold">
            Ingrediants
          </h4>
          <ul className="flex flex-col space-y-3  my-3">
            {ingredients?.map((item, index) => (
              <li key={index} className="flex items-center gap-2 my-2">
                <span className="text-[#53c60b] text-lg">•</span>
                <p className="text-sm font-semibold mx-[10px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-[100px]">
          <h4 className="text-green text-base my-6 font-semibold">Recipe</h4>
          {recipe?.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 ? "bg-recipeEven" : "bg-recipeOdd"
              } flex items-center py-5 px-[10px] text-justify`}
            >
              <span className="text-[2rem] mr-[15px] ml-[5px]">
                {index + 1}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <button className="w-full bg-green text-white border-none p-[15px] text-xl rounded-[10px] cursor-pointer mb-[25px]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
