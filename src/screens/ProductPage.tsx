//route
import { useParams } from "react-router-dom";

//store
import { useGetProductQuery } from "../store/api/products";

function ProductPage() {
  //get params
  const params = useParams();

  //rtk query
  const { data }: any = useGetProductQuery(params.id!);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <div className="d-flex justify-content-center pt-5">
        <div className="col-md-6">
          <img
            className="card-img-top mb-5 mb-md-0 card__image"
            src={data?.thumbnail}
            alt="product"
          />
        </div>
        <div className="col-md-6 ps-4">
          <div className="small mb-1">ID: {data?.id}</div>
          <h1 className="display-5 fw-bolder">{data?.title}</h1>
          <div className="fs-5 mb-5">
            <span className="text-decoration-line-through product__old-price">
              {data?.price}$
            </span>
          </div>
          <p className="lead">{data?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
