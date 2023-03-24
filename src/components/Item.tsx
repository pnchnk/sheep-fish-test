import React from "react";

import { Product } from "../types";

//react-router
import { useNavigate } from "react-router-dom";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

//redux actions
import { useAppDispatch } from "../store/hooks";
import { removeFromList } from "../store/slices/products";

function Item({
  id,
  title,
  description,
  price,
  thumbnail,
  rating,
  stock,
  category,
  item,
}: Product) {
  //navigation
  const navigate = useNavigate();

  //navigation func, passing item into nav props
  const handleNavigate = (item: Product) => {
    navigate(`/${item.id}`, {
      state: {
        item,
      },
    });
  };

  //redux actions
  const dispatch = useAppDispatch();
  const handleDelete = (product: Product) => {
    dispatch(removeFromList(product));
  };

  return (
    <tr style={{ maxWidth: "100%" }} key={id}>
      <td>{id}</td>
      <td style={{ cursor: "pointer" }} onClick={() => handleNavigate(item!)}>
        {title}
      </td>
      <td style={{ cursor: "pointer" }} onClick={() => handleNavigate(item!)}>
        {description}
      </td>
      <td>{price}€</td>
      <td>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="product"
            style={{ width: "80px", backgroundSize: "contain", height: 60 }}
          />
        ) : (
          <span>Photo</span>
        )}
      </td>
      <td>{rating}</td>
      <td>{stock}</td>
      <td>{category}</td>
      <td>
        <FontAwesomeIcon
          onClick={() => handleDelete(item!)}
          icon={faXmark}
          className="deleteIcon"
          style={{ display: "inline-flex" }}
        />
      </td>
    </tr>
  );
}

export default Item;
