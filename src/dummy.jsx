// // import React, { useState } from 'react'
// // import Container from "react-bootstrap/Container";
// // import Row from "react-bootstrap/Row";
// // import Col from "react-bootstrap/Col";
// // import Form from "react-bootstrap/Form";
// // import Button from "react-bootstrap/Button";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import moment from 'moment';
// // // import {DatetimePicker} from 'rc-datetime-picker';
// // import environment from '../../environment';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import DatePicker from 'react-date-picker';
// // // import 'react-dates/lib/css/_datepicker.css';

// // const Login = () => {
// //     const navigate = useNavigate();

// //     const defaultValues = {
// //         title: '',
// //         target: '',
// //         checkbox: true,
// //         createdAt: '',
// //         updatedAt: ''
// //     }

// //     const [date,setDate] = useState("");
// //     const [form , setForm] = useState(defaultValues)

// //     const formik = useFormik({
// //         initialValues : form,
// //         validationSchema: Yup.object({
// //             title: Yup.string()
// //                 .min(3, "Must be  3 characters or more")
// //                 .required("Required"),
// //             date: Yup.string()
// //                 .required("Required")
// //         }),

// //         onSubmit: (values) => {
// //             const datePick = {
// //                 createdAt : moment().format("MMM Do YY"),
// //                 updatedAt :moment().format("MMM Do YY")
// //             }

// //             const Total = {
// //                 ...datePick, ...values
// //             }
// //              console.log(Total)
//             // axios.put(`${environment.api}/todos`, values)
//             //     .then(function (response) {
//             //         console.log(response);
//             //         navigate("/")
//             //     })
//             //     .catch(function (error) {
//             //         console.log(error);
//             //     });

// //             axios.post("http://localhost:3006/todos", Total)
// //                 .then ((response) =>{
// //                     console.log(response);
// //                     setForm(response)
// //                 })
// //                 .catch((error)=>{
// //                     console.log(error);
// //                 })
// //         }
// //     });

// //     return (
// //         <Container>
// //             <Row>
// //                 <Col>
// //                     <Form onSubmit={formik.handleSubmit}>
// //                         <Form.Group className="mt-5" controlId="title">
// //                             <Form.Label>Title</Form.Label>
// //                             <Form.Control
// //                                 type="text"
// //                                 name="title"
// //                                 onChange={formik.handleChange}
// //                                 value={formik.values.title}
// //                                 placeholder="Enter title"
// //                             />
// //                             <Form.Text className="text-danger">
// //                                 {formik.touched.title && formik.errors.title ? (
// //                                     <div className="text-danger">{formik.errors.title}</div>
// //                                 ) : null}
// //                             </Form.Text>
// //                         </Form.Group>

// //                         <Form.Group className="mb-3">
// //                             <Form.Check
// //                                 required
// //                                 name="completed"
// //                                 label="completed"
// //                                 feedbackType="invalid"
// //                                 id="validationFormik0"
// //                                 onChange={formik.handleChange}
// //                             />
// //                         </Form.Group>

// //                         <Form.Group className="mb-3" controlId="password">
// //                             <Form.Label>Target</Form.Label>

// //                             <DatePicker
// //                                 type="date"
// //                                 name="date"
// //                                 showIcon
// //                                 // value={formik.values.date}
// //                                 selected = {date}
// //                                 onChange = {(xd) => setDate(xd)}
// //                             />
// //                             <Form.Text className="text-danger">
// //                                 {formik.touched.date && formik.errors.date ? (
// //                                     <div className="text-danger">{formik.errors.date}</div>
// //                                 ) : null}
// //                             </Form.Text>
// //                         </Form.Group>


// //                         <Button variant="info" type="submit">
// //                             Submit
// //                         </Button>

// //                     </Form>
// //                 </Col>
// //             </Row>
// //         </Container>
// //     )
// // }

// // export default Login




// // import React from "react";
// // import Form from "react-bootstrap/Form";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import moment from "moment";
// // import { Container } from "react-bootstrap";
// // import Button from "react-bootstrap/Button";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // const Todo = () => {
// //     const nav = useNavigate();
// //     const validationSchema = Yup.object().shape({
// //         title: Yup.string()
// //             .required("title is requried")
// //             .min(5, "title must be at least 5 characters")
// //             .max(10, "title must be not exceed 10 characters"),
// //         target: Yup.string().required("Traget is required"),
// //         checkbox: Yup.boolean(),

// //     });
// //     const formik = useFormik({
// //         initialValues: {
// //             title: "",
// //             target: "",
// //             checkbox: "",
// //             updatedAt: moment().format("DD-MM-YYYY , h:mm:ss"),
// //             createdAt: moment().format("DD-MM-YYYY , h:mm:ss"),

// //         },
// //         validationSchema,
// //         onSubmit: (values) => {
// //             axios.post("http://localhost:3007/todos", values)
// //                 .then(function (response) {
// //                     console.log(response);
// //                     nav("/")
// //                 })
// //                 .catch(function (error) {
// //                     console.log(error);
// //                 });
// //         },
// //     })
// //     return (
// //         <>
// //             <Container>
// //                 <Form className="mt-5" onSubmit={formik.handleSubmit}>
// //                     <Form.Group className="mb-3">
// //                         <Form.Label htmlFor="title">Title</Form.Label>
// //                         <Form.Control
// //                             value={formik.values.title}
// //                             onChange={formik.handleChange}
// //                             onBlur={formik.handleBlur}
// //                             className={

// //                                 (formik.errors.title && formik.touched.title ? " is-invalid" : "")
// //                             }
// //                             type="text"
// //                             name="title"
// //                             placeholder="Enter your title"
// //                         />
// //                         <div className="invalid-feedback">
// //                             {formik.errors.title && formik.touched.title
// //                                 ? formik.errors.title
// //                                 : null}
// //                         </div>
// //                     </Form.Group>

// //                     <Form.Group className="mb-3">
// //                         <Form.Label htmlFor="target">Target</Form.Label>
// //                         <Form.Control
// //                             value={formik.values.target}
// //                             onChange={formik.handleChange}
// //                             onBlur={formik.handleBlur}
// //                             className={

// //                                 (formik.errors.target && formik.touched.target ? " is-invalid" : "")
// //                             }
// //                             type="date"
// //                             name="target"
// //                             placeholder="enter Target"
// //                         />
// //                         <div className="invalid-feedback">
// //                             {formik.errors.target && formik.touched.target
// //                                 ? formik.errors.target
// //                                 : null}
// //                         </div>
// //                     </Form.Group>
// //                     <Form.Group htmlFor="checkbox" className="mb-3" controlId="formBasicCheckbox">
// //                         <Form.Check type="checkbox" name="checkbox" label="Complete" />
// //                     </Form.Group>
// //                     <Button variant="primary" type="submit">
// //                         Submit
// //                     </Button>
// //                 </Form>
// //             </Container>
// //         </>
// //     );
// // };

// // export default Todo;



// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import { useState } from "react"
// import { useFormik } from "formik";
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import DatePicker from "react-datepicker";
// import axios from 'axios';
// import Container from "react-bootstrap/Container"
// import Form from "react-bootstrap/Form"
// import * as Yup from "yup"
// import moment from 'moment'
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from 'react-router-dom';
// import environment from '../../environment';
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const EditForm = () => {

//     useEffect(() => {
//       const params = useParams();
//       const { id } = params
//       if (!id) {
//         return;
//       }
//       axios(`${environment.api}/todos/` + id)
//         .then((res) => {
//           const forDate = {
//             createdDate: moment(res).format('YYYY Do MMMM, h:mm:ss'),
//             updatedDate: moment(res).format('YYYY Do MMMM')
//           }
//           const totalData = { ...res, ...forDate }
//           setProduct(totalData)
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//     }, [])


//     const defaultValues = {
//         title: "",
//         completed: true,
//         target: "",
//         createdAt: moment(res).format('YYYY Do MMMM, h:mm:ss'),
//         updatedAt:moment(res).format('YYYY Do MMMM, h:mm:ss')
//     }

//     const [date, setDate] = useState('');
//     const [form, setForm] = useState(defaultValues);

//     const nav = useNavigate();

//     const formik = useFormik({
//         initialValues: form,
//         enableReinitialize: true,
//         validationSchema: Yup.object({
//             title: Yup.string()
//                 .min(4, "Must be  4 characters or more")
//                 .max(20, "Must be 20 characters or less")
//                 .required("Required")
//         }),

//         onSubmit: (values) => {
//             const formDates = {
//                 target: moment(values).format('YYYY Do MMMM'),
//                 createdAt: moment(values).format('YYYY Do MMMM'),
//                 updatedAt: moment(values).format('YYYY Do MMMM')
//             }
//             const fullData = { ...values, ...formDates }

//             const [SingleData, setSingleData] = useState({});
//             useEffect(() => {
//                 getUserId();
//             }, [])

//             function getUserId() {
//                 axios.get(`${environment.api}/todos/` + id)
//                     .then(res => res)
//                     .then(res => { setSingleData({ ...res.data }) }
//                     )
//                 console.log(SingleData)
//             }

//             axios.put(`${environment.api}/todos/` + id, SingleData)
//                 .then(res => res)
//                 .then((res) => {
//                     console.log(res.data);
//                     nav("/");
//                 });
//         }
//         // console.log(totalData);

//         // if (id) {
//         //   const forDate = {
//         //     createdDate: moment(values).format('YYYY Do MMMM, h:mm:ss'),
//         //     updatedDate: moment(values).format('YYYY Do MMMM')
//         //   }
//         //   const totalData = { ...values, ...forDate }
//         //   fetch("http://localhost:3000/products/" + id, {
//         //     method: "PUT",
//         //     headers: { 'Content-Type': 'application/json' },
//         //     body: totalData
//         //   })
//         //     .then((res) => {
//         //       res.json()
//         //       nav('/')
//         //     })
//         //     .catch((error) => {
//         //       console.log(error)
//         //     })
//         // } 
//         // axios.put(`${environment.api}/todos/`, fullData)
//         //     .then((res) => {
//         //         setForm(res);
//         //         console.log(res.data);
//         //         nav('/')
//         //     })
// })

// return (
//     <>
//         <Container className='my-5'>
//             <Row>
//                 <Col>
//                     <Form onSubmit={formik.handleSubmit}>

//                         <Form.Group className='mb-3' controlId='title'>
//                             <Form.Label>Title</Form.Label>
//                             <Form.Control
//                                 type='text'
//                                 name='title'
//                                 onChange={formik.handleChange}
//                                 value={formik.values.title}
//                                 placeholder='Enter Title'
//                             />
//                             <Form.Text className='text-danger'>
//                                 {formik.touched.title && formik.errors.title ? (
//                                     <div className='text-danger'>{formik.errors.title}</div>
//                                 ) : null}
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                             <Form.Check
//                                 name="completed"
//                                 label="completed"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.completed}
//                             />
//                         </Form.Group>

//                         <Form.Group className='mb-3' controlId='description'>
//                             <Form.Label>Date</Form.Label>
//                             <DatePicker
//                                 className='form-control'
//                                 name='date'
//                                 showIcon
//                                 selected={date}
//                                 onChange={(date) => setDate(date)}
//                             />
//                             <Form.Text className='text-danger'>
//                                 {formik.touched.date && formik.errors.date ? (
//                                     <div className='text-danger'>{formik.errors.date}</div>
//                                 ) : null}
//                             </Form.Text>
//                         </Form.Group>

//                         <Button variant='primary' type='submit'>
//                             Submit
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     </>
// )
// }

// export default EditForm

// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import { useState } from "react"
// import { useFormik } from "formik"
// import DatePicker from "react-datepicker";
// import axios from 'axios';
// import Container from "react-bootstrap/Container"
// import Form from "react-bootstrap/Form"
// import * as Yup from "yup"
// import moment from 'moment'
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from 'react-router-dom';
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import environment from '../../environment';

// const MyForm = () => {

//   const defaultValues = {
//     title: "",
//     complete: true,
//     target: "",
//     createdAt: "",
//     updatedAt: ""
//   }

//   const [startDate, setStartDate] = useState('');

//   const [product, setProduct] = useState(defaultValues);
//   const nav = useNavigate();

//   const formik = useFormik({
//     initialValues: product,
//     enableReinitialize: true,
//     validationSchema: Yup.object({
//       title: Yup.string()
//         .min(4, "Must be  4 characters or more")
//         .max(15, "Must be 15 characters or less")
//         .required("Required")
//     }),

//     onSubmit: (values) => {
//       const forDate = {
//         target: moment(values).format('YYYY Do MMMM'),
//         createdAt: moment(values).format('YYYY Do MMMM'),
//         updatedAt: moment(values).format('YYYY Do MMMM')
//       }
//       const totalData = { ...values, ...forDate }

//       axios.post(`${environment.api}/todos`, totalData)
//         .then((res) => {
//           setProduct(res);
//           console.log(res.data);
//           nav('/')
//         })
//     }
//   })

//   return (
//     <>
//       <Container>
//         <Row>
//           <Col>
//             <Form onSubmit={formik.handleSubmit} className="mt-5">
//               <Form.Group controlId='title' className='mb-3'>
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                   type='text'
//                   name='title'
//                   onChange={formik.handleChange}
//                   value={formik.values.title}
//                   placeholder='Enter Title'
//                 />
//                 <Form.Text className='text-danger'>
//                   {formik.touched.title && formik.errors.title ? (
//                     <div className='text-danger'>{formik.errors.title}</div>
//                   ) : null}
//                 </Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Check
//                   name="completed"
//                   label="completed"
//                   onChange={formik.handleChange}
//                   value={formik.values.complete}
//                 />
//               </Form.Group>

//               <Form.Group controlId='description' className='mb-3'>
//                 <Form.Label>Date</Form.Label>
//                 <DatePicker
//                   className='form-control'
//                   name='date'
//                   showIcon
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                 />
//                 <Form.Text className='text-danger'>
//                   {formik.touched.date && formik.errors.date ? (
//                     <div className='text-danger'>{formik.errors.date}</div>
//                   ) : null}
//                 </Form.Text>
//               </Form.Group>

//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>

//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default MyForm