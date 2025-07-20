import MenuPage from "../../components/templates/MenuPage";

function Menu({ data }) {
  console.log(data);
  return (
    <div>
      <MenuPage data={data} />
    </div>
  );
}

export default Menu;

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}/data`);
  const data = await response.json();

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
