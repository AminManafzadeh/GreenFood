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
  const response = await fetch("http://localhost:4000/data");
  const data = await response.json();

  return {
    props: { data },
    revalidate: 10,
  };
}
