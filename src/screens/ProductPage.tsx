//route
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//store
import { useGetProductQuery } from "../store/api/products";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function ProductPage() {
  //getting item from location 
  const location = useLocation();
  let item = location.state.item;

  //get params
  const params = useParams();

  //rtk query
  useGetProductQuery(params.id!);

  return (
    <>
      <div className="container" style={{ backgroundColor: "white" }}>
        <div className="row px-5 py-5">
          <Link className="navbar-brand product-nav-link" to={"/"}>
            <FontAwesomeIcon icon={faBackward} />
            Main Page
          </Link>
        </div>
        <div className="d-flex justify-content-center py-5 px-5">
          <div className="col-md-6">
            {item?.thumbnail ? (
              <img
                className="card-img-top mb-5 mb-md-0 card__image"
                src={item?.thumbnail}
                alt="product"
              />
            ) : (
              <span>No Photo</span>
            )}
          </div>
          <div className="col-md-6 ps-4">
            <div className="small mb-1">ID: {item?.id}</div>
            <h1 className="display-5 fw-bolder">{item?.title}</h1>
            <div className="fs-5 mb-5">
              <span>{item?.price}€</span>
            </div>
            <p className="lead">{item?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
