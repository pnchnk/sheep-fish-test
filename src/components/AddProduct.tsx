import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../store/hooks";
import { addToList } from "../store/slices/products";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  author: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  rating: Yup.number().required("Required").min(0).max(5),
  description: Yup.string().required("Required"),
  price: Yup.number().required("Required").min(0),
  category: Yup.string().required("Required"),
  stock: Yup.number().required("Required").min(0),
});

const AddProductForm = () => {
  const initialValues = {
    title: "",
    author: "",
    date: "",
    rating: 0,
    description: "",
    price: 0,
    category: "",
    stock: 0,
  };

  const dispatch = useAppDispatch();

  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    // handle form submission here
    dispatch(addToList(values));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add product</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Form className="form">
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="title"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Title:
                </label>
                <Field
                  id="title"
                  name="title"
                  placeholder="Enter product title"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.title && touched.title && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.title}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="author"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Author:
                </label>
                <Field
                  id="author"
                  name="author"
                  placeholder="Enter author name"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.author && touched.author && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.author}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="date"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Date:
                </label>
                <Field
                  id="date"
                  name="date"
                  type="date"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.date && touched.date && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.date}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="rating"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Rating:
                </label>
                <Field
                  id="rating"
                  name="rating"
                  type="number"
                  placeholder="Enter rating (0-5)"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.rating && touched.rating && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.rating}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="description"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Description:
                </label>
                <Field
                  id="description"
                  name="description"
                  type="string"
                  placeholder="Enter description"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.description && touched.description && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.description}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="category"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Category:
                </label>
                <Field
                  id="category"
                  name="category"
                  type="string"
                  placeholder="Enter category"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.category && touched.category && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.category}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="price"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Price:
                </label>
                <Field
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Enter price €"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.price && touched.price && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.price}
                    </span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="stock"
                  style={{
                    marginRight: "10px",
                    display: "inline-block",
                    width: "80px",
                  }}
                >
                  Quantity:
                </label>
                <Field
                  id="stock"
                  name="stock"
                  type="number"
                  placeholder="Enter quantity"
                  style={{ outline: "none", border: "none" }}
                />
                {errors.stock && touched.stock && (
                  <div>
                    <span style={{ color: "red", fontSize: "14px" }}>
                      {errors.stock}
                    </span>
                  </div>
                )}
              </div>

              <button type="submit" className="form-button">
                Add Product
              </button>
            </Form>
          </div>
        )}
      </Formik>
      {showMessage && <div className="modalSubmit">Product added</div>}
    </>
  );
};

export default AddProductForm;
