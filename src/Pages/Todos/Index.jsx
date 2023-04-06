import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import environment from "../../environment";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Todo = () => {
  const nav = useNavigate();

  const params = useParams();
  const { id } = params;

  const [completed, setCompleted] = useState(false);

  const defaultValues = {
    title: "",
    completed: false,
    target: "",
    updatedAt: moment().format("DD-MM-YYYY hh:mm:ss"),
    createdAt: moment().format("DD-MM-YYYY hh:mm:ss"),
  };

  const [product, setProduct] = useState(defaultValues);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios(`${environment.api}/todos/` + id).then((res) => {
      const temp = { ...defaultValues, ...res.data };
      setProduct(temp);
    });
  }, []);

  const formik = useFormik({
    initialValues: product,
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, "Must be  3 characters or more")
        .max(15, "Max 15 characters or less")
        .required("Required"),
      target: Yup.string().required("Target is required"),
      checkbox: Yup.boolean(),
    }),

    onSubmit: (values) => {
      if (id) {
        axios.put(`${environment.api}/todos/` + id, values)
          .then(function (response) {
            console.log(response);
            nav("/")
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios.post(`${environment.api}/todos/`, values)
          .then(function (response) {
            console.log(response);
            nav("/")
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  })

  function CompletedFun(e) {
    console.log(e.target.checked)
    setProduct({...product, completed :! completed})
  }
  
  return (
    <>
      <Container>
        <Form className="mt-5" onSubmit={formik.handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Enter Title"
            />
            <Form.Text className="text-danger">
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="target">Target</Form.Label>
            <Form.Control
              value={formik.values.target}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
              name="target"
              placeholder="enter Target"
            />
            <div className="invalid-feedback">
              {formik.errors.target && formik.touched.target
                ? formik.errors.target
                : null}
            </div>
          </Form.Group>

          <Form.Group htmlFor="checkbox" className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="completed" label="Completed" onChange={(e) => CompletedFun(e)}
             checked={formik.values.completed} />
            <Form.Text className="text-danger">
              {formik.touched.completed && formik.errors.completed ? (
                <div className="text-danger">{formik.errors.completed}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Todo;
