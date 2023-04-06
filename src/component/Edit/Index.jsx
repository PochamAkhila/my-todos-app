import React from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import environment from "../../environment";
// import { useEffect } from "react";

const MyTodo = () => {
    const nav = useNavigate();
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("title is requried")
            .min(5, "title must be at least 5 characters")
            .max(15, "title must be not exceed 15 characters"),
        target: Yup.string().required("Target is required"),
        checkbox: Yup.boolean(),

    });
    const formik = useFormik({
        initialValues: {
            title: "",
            target: "",
            checkbox: "",
            updatedAt: moment().format("DD-MM-YYYY"),
            createdAt: moment().format("DD-MM-YYYY"),
        },
        validationSchema,
        onSubmit: (values) => {
            axios.put(`${environment.api}/todos/`, values)
                .then(function (response) {
                    console.log(response);
                    nav("/")
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    })

    // const [state, setState] = useState([]);
    // const [list,setList] = useState([]);

    return (
        <>
            <Container>
                <Form className="mt-5" onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={

                                (formik.errors.title && formik.touched.title ? " is-invalid" : "")
                            }
                            type="text"
                            name="title"
                            placeholder="Enter your title"
                        />
                        <div className="invalid-feedback">
                            {formik.errors.title && formik.touched.title
                                ? formik.errors.title
                                : null}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="target">Target</Form.Label>
                        <Form.Control
                            value={formik.values.target}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={

                                (formik.errors.target && formik.touched.target ? " is-invalid" : "")
                            }
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
                        <Form.Check type="checkbox" name="checkbox" label="Complete" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default MyTodo;
