import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import "../Table/Style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import environment from '../../environment';
import ConfirmModal from '../Delete/Index';
import { useDispatch } from 'react-redux';
import { add } from '../../reducers/Todo';
import { useContext } from 'react';
import { UserContext } from './ThemeContext';
import { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { DownloadTableExcel } from 'react-export-table-to-excel';

function Mytable() {

    const downloadRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => downloadRef.current
    })

    const { theme } = useContext(UserContext);

    const Style = theme && "dark";
    console.log(Style)

    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState("");
    const [verify, setVerify] = useState(false);
    // const [userList, setUserList] = useState([]);
    // const [userList1, setUserList1] = useState([]);
    // const [original, setOriginal] = useState([]);
    // const [products, setProducts] = useState([]);
    // const theme = useContext(ThemeContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getData = () => {
        fetch(`${environment.api}/todos`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.length)
                dispatch(add(data.length))
                setData(data)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    function onEditClick(id) {
        navigate("/todos/" + id)
    }

    function deleteUser(id) {
        setVerify(true);
        setDeleteId(id);
    }
    function onVerify(result) {
        if (!result) {
            setVerify(false);
            return;
        }
        fetch(`${environment.api}/todos/` + deleteId,
            { method: "DELETE" })
            .then((res) => {
                console.log(res)
                getData();
                setVerify(false);
            })
    }
    // function onSearch(event) {
    //     let text = event.target.value;

    //     if (!text) {
    //         setUserList(original);
    //     } else {
    //         let filterd = userList.filter((item) => {
    //             return item.title.toLowerCase().includes(text.toLowerCase());
    //         });
    //         setUserList(filterd);
    //     }
    // }

    return (
        <>
            <div className='btn1'>
                <button type='button' className="btn-bg" onClick={handlePrint}>Print</button>

                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={downloadRef.current}
                >
                    <button type='button' className='btn-bg'> Export excel </button>
                </DownloadTableExcel>
            </div>

            <div className={`${Style}`} ref={downloadRef}>
                <Container className='main'>
                    <Table bordered hover  >
                        <thead className={`${Style}`}>
                            <tr className={`${Style}`}>
                                <th>#</th>
                                <th>Titles</th>
                                <th>Completed</th>
                                <th>Target Date</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th className='action'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className={`${Style}`}>
                            {data && data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.completed ? "Done" : "InComplete"}</td>
                                        <td>{item.target}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.updatedAt}</td>
                                        {/* <td><DateFormat date={item.target} /></td>
                                    <td><DateFormat date={item.createdAt} /></td>
                                    <td><DateFormat date={item.updatedAt} /></td> */}
                                        <td>
                                            <div style={{ width: "170px" }}>
                                                <button className='edit-btn' onClick={() => onEditClick(item.id)}>
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                                <button className='del-btn' onClick={() => deleteUser(item.id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
            </div>
            {verify ? <ConfirmModal onClose={onVerify} /> : ""}

        </>
    );
}

export default Mytable;


    // const getWork = async () => {
    //     const response = await axios.get("http://localhost:3001/todos");
    //     const data = response.data;
    //     if (response.ok) {
    //         setCustomers(data);
    //         console.log(data)
    //     }
    // }
    // useEffect(() => {
    //     getWork();
    // }, []);

        // function deleteUser(id) {
    //     setVerify(true);
    //     setDeleteId(id);
    // }
    // function onVerify(result) {
    //     if (!result) {
    //         setVerify(false);
    //         return;
    //     }
    //     axios
    //         .delete(`${environment.api}/todos/` + deleteId)
    //         .then((res) => {
    //             setUserList1([])
    //             setVerify(false);

    //         })
    //         .catch((err) => { console.log(err) });
    // }

        // function deleteUser(id){
    //     fetch(`${environment.api}/todos/` +id ,
    //     {method: "DELETE"})
    //     .then((res)=>{
    //         console.log(res)
    //         getData();
    //     })

    // }
      // function getRowClassName(todo) {
    //     const targetMomented = moment(todo.target, dateFormat);
    //     const today = moment();
    //     if (todo.completed) {
    //         return 'text-success'
    //     }
    //     if (today.isAfter(targetMomented) && !todo.completed) {

    //         return 'text-danger';
    //     }
    //     return '';
    // }
    // const [search, setNewSearch] = useState("");
    // const handleSearchChange = (e) => {
    //     setNewSearch(e.target.value);
    // };

    // const filtered = !search
    //     ? data
    //     : data.filter((data) =>
    //         data.title.toLowerCase().includes(search.toLowerCase())
    //     );
