import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import Image from "next/image";

function Categories({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficoulty: "", time: "" });

  useEffect(() => {
    const { difficoulty, time } = router.query;
    if (query.difficoulty !== difficoulty || query.time !== time) {
      setQuery({ difficoulty, time });
    }
  }, []);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handlerSearch = () => {
    console.log(query);
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className="max-w-[900px] m-auto mt-24 max-[900px]:p-5 max-[600px]:p-2">
      <h2 className="border-b-[5px] border-b-green font-semibold w-fit mb-12 text-3xl pb-3 ">
        Categories
      </h2>

      <div>
        <div>
          <select
            onChange={handleChange}
            value={query.difficoulty}
            name="difficoulty"
            className="border-none w-[150px] h-[40px] rounded-[10px] mr-[10px] p-[10px] text-green shadow-green-shadow"
          >
            <option value="">Difficoulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            onChange={handleChange}
            value={query.time}
            name="time"
            className="border-none w-[150px] h-[40px] rounded-[10px] mr-[10px] p-[10px] text-green shadow-green-shadow"
          >
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button
            onClick={handlerSearch}
            className="bg-green text-white border-none h-[35px] px-5 rounded-lg cursor-pointer shadow-green-shadow"
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap mt-[50px] justify-between">
          {!data.length ? (
            <Image
              width={400}
              height={300}
              src="/images/search.png"
              alt="Categoriy"
              className="m-auto object-cover"
            />
          ) : null}
          {data?.map((food) => (
            <Card key={food.id} data={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
