import Categories from "../../components/templates/Categories";

function CategoriesPage({ data }) {
  console.log(data);
  return (
    <div>
      <Categories data={data} />
    </div>
  );
}

export default CategoriesPage;

export async function getServerSideProps(context) {
  const {
    query: { difficoulty, time },
  } = context;

  const response = await fetch("http://localhost:4000/data");
  const data = await response.json();

  const filteredData = data.filter((item) => {
    const difficoultyResult = item.details.filter((detail) => {
      return detail.Difficulty && detail.Difficulty === difficoulty;
    });

    const timeResulte = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && Number(timeDetail) <= 30) {
        return detail;
      } else if (time === "more" && timeDetail && Number(timeDetail) > 30) {
        return detail;
      }
    });

    if (time && difficoulty && timeResulte.length && difficoultyResult.length) {
      return item;
    } else if (!time && difficoulty && difficoultyResult.length) {
      return item;
    } else if (time && !difficoulty && timeResulte.length) {
      return item;
    }
  });

  return {
    props: { data: filteredData },
  };
}
