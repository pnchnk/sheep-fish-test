import React, { useEffect, useState } from "react";

//types
import { ProductsSlice } from "../store/type";
import { Product } from "../types";

//components
import Item from "../components/Item";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Table({ products }: ProductsSlice) {
  useEffect(() => {
    //set filteredData to render initial state
    setFilteredData(products);
  }, [products]);

  //states for searching
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(products);

  //searching function
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredItems = products?.filter(
      (item: Product) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  //sorting
  type SortDirection = "asc" | "desc";

  interface SortState {
    column: string;
    direction: SortDirection;
  }

  //state for sorting
  const [sort, setSort] = useState<SortState>({
    column: "",
    direction: "asc",
  });

  //sorting function
  const handleSort = (column: any) => {
    const direction: SortDirection =
      sort.column === column && sort.direction === "asc" ? "desc" : "asc";
    setSort({ column, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      // @ts-ignore
      if (a[column] < b[column]) {
        return direction === "asc" ? -1 : 1;
      }
      // @ts-ignore
      if (a[column] > b[column]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredData(sortedData);
  };

  return (
    <>
      <div className="search">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ display: "flex", alignSelf: "center" }}
        />
        <input
          placeholder="Search in table..."
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          style={{ outline: "none", border: "none", padding: "4px 6px" }}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("id")}
            >
              {sort.column === "id" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              ID
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("title")}
            >
              {sort.column === "title" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Title
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("description")}
            >
              {sort.column === "description" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Description
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("price")}
            >
              {sort.column === "price" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Price
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("photo")}
            >
              {sort.column === "photo" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Photo
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("rating")}
            >
              {sort.column === "rating" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Rating
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("stock")}
            >
              {sort.column === "stock" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Stock
            </th>
            <th
              style={{ cursor: "pointer" }}
              scope="col"
              onClick={() => handleSort("category")}
            >
              {sort.column === "category" && (
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={sort.direction === "asc" ? faCaretUp : faCaretDown}
                />
              )}{" "}
              Category
            </th>
          </tr>
        </thead>
        <tbody style={{ maxWidth: "100%" }}>
          {filteredData.map((item: Product) => {
            return (
              <Item
                id={item.id}
                title={item.title}
                description={item.description}
                stock={item.stock}
                rating={item.rating}
                category={item.category}
                item={item}
                price={item.price}
                thumbnail={item.thumbnail}
                key={item.id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
