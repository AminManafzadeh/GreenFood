import Card from "../modules/Card";

function MenuPage({ data }) {
  return (
    <div className="max-w-[900px] m-auto mt-24 max-[900px]:p-5 max-[600px]:p-2">
      <h1 className="border-b-4 border-b-green w-fit font-semibold mb-12 text-3xl max-[900px]:m-auto max-[900px]:mb-12">
        Menu
      </h1>

      <div className="flex flex-wrap justify-between max-[900px]:justify-around">
        {data?.map((food) => {
          return <Card key={food.id} data={food} />;
        })}
      </div>
    </div>
  );
}

export default MenuPage;
