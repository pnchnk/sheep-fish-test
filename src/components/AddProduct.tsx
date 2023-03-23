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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="title"
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Title:
              </label>
              <Field
                id="title"
                name="title"
                placeholder="Enter product title"
                style={{ outline: "none" }}
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Author:
              </label>
              <Field
                id="author"
                name="author"
                placeholder="Enter author name"
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Date:
              </label>
              <Field id="date" name="date" type="date" />
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Rating:
              </label>
              <Field
                id="rating"
                name="rating"
                type="number"
                placeholder="Enter rating (0-10)"
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Description:
              </label>
              <Field
                id="description"
                name="description"
                type="string"
                placeholder="Enter description"
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Category:
              </label>
              <Field
                id="category"
                name="category"
                type="string"
                placeholder="Enter category"
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Price:
              </label>
              <Field
                id="price"
                name="price"
                type="number"
                placeholder="Enter price (0-10)"
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
                style={{ marginRight: "10px", display: "inline-block" }}
              >
                Quantity:
              </label>
              <Field
                id="stock"
                name="stock"
                type="number"
                placeholder="Enter quantity"
              />
              {errors.stock && touched.stock && (
                <div>
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors.stock}
                  </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              style={{
                padding: "10px 15px",
                borderRadius: "10px",
                border: "none",
                background: "#f6f5f3",
              }}
            >
              Add Product
            </button>
          </Form>
        )}
      </Formik>
      {showMessage && <div className="modalSubmit">Product added</div>}
    </>
  );
};

export default AddProductForm;
