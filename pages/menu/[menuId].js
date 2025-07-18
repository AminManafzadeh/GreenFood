import DetailsPage from "../../components/templates/DetailsPage";

function MenuDetailPage({ data }) {
  return (
    <div>
      <DetailsPage data={data} />
    </div>
  );
}

export default MenuDetailPage;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data?.map((food) => ({ params: { menuId: String(food.id) } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/data/${params.menuId}`);
  const data = await res.json();

  if (!data.name) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
