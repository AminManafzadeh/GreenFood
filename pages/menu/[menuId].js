import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

function MenuDetailPage({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading Page...</h2>;
  }

  return (
    <div>
      <DetailsPage data={data} />
    </div>
  );
}

export default MenuDetailPage;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data?.map((food) => ({
    params: { menuId: String(food.id) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${params.menuId}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: +process.env.REVALIDATE,
  };
}
