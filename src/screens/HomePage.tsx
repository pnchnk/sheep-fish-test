//redux
import { useAppSelector } from "../store/hooks";
import { useGetAllProductsQuery } from "../store/api/products";

//components
import AddProductForm from "../components/AddProduct";
import Table from "../components/Table";

function HomePage() {
  //rtk query
  useGetAllProductsQuery();
  //redux state
  const products = useAppSelector((state) => state.products.products);

  return (
    <div className="App">
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="pt-4">
          <AddProductForm />
        </div>
        <div>
          <Table products={products} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
