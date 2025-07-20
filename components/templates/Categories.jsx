import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import Image from "next/image";

function Categories({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (difficulty || time) {
      setQuery({ difficulty: difficulty || "", time: time || "" });
    }
  }, [router.query]);

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handlerSearch = () => {
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
        <div className="max-[600px]:flex max-[600px]:flex-col">
          <select
            onChange={handleChange}
            value={query.difficulty}
            name="difficulty"
            className="border-none w-[150px] h-[40px] rounded-[10px] mr-[10px] p-[10px] text-green shadow-green-shadow max-[600px]:w-full max-[600px]:mb-5 "
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            onChange={handleChange}
            value={query.time}
            name="time"
            className="border-none w-[150px] h-[40px] rounded-[10px] mr-[10px] p-[10px] text-green shadow-green-shadow max-[600px]:w-full max-[600px]:mb-5"
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

        <div className="flex flex-wrap mt-[50px] justify-between max-[900px]:justify-around">
          {!data.length ? (
            <Image
              width={400}
              height={300}
              src="/images/search.png"
              alt="Category"
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
