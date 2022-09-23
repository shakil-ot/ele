import React, {useEffect, useState} from 'react';
import "./rcv.css";
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import Table from "../DataTable";
import axios from "axios";
import Button from "@mui/material/Button";

const steps = [
    'confirmed',
    'picked',
    'on the way',
    'door step',
    'delivered'
];

const ReceiverOrderList = ({}) => {
    const [data, setData] = useState([])

    const clickhandler = name => console.log("delete", name);


    const loadData = () => {
        axios.post("http://localhost:8000/api/order-request-get",
            {
                user_id: localStorage.getItem("user_id"),
            }).then((data) => {
            let response = data.data.data

            setData(() => response)
        }).catch((data) => {

        });
    }

    useEffect(() => {
        loadData()
    }, [])

    const Change = (id, status) => {
        axios.post("http://localhost:8000/api/order-request-change-status",
            {
                id: id,
                status: status,
                user_id: localStorage.getItem("user_id"),
            }).then((data) => {
            loadData()
        }).catch((data) => {

        });
    }


    const processStatus = (status) => {
        if (status == 0) {
            return "Pending";
        }
        if (status == 1) {
            return "Processing";
        }

        if (status == 2) {
            return "delivered"
        }

    }

    const columns = [
        {
            name: "Process Status",
            button: true,
            grow: 5,
            cell: row => row.status > -1 ? (
                (<>
                    {processStatus(row.status)}

                </>)
            ) : null
        },
        {
            name: "Name",
            selector: "name",
            sortable: true,
            grow: 2
        },
        {
            name: "Address",
            selector: "address",
            sortable: true,
            grow: 2
        },
        {
            name: "Email",
            selector: "email",
            sortable: false,
            hide: "sm",
            grow: 2
        },
        {
            name: "Process Status",
            button: true,
            grow: 5,
            cell: row => row.status > -1 ? (
                (<>
                    {row.status == 2 ? "delivered" : ( <Button variant="outline-primary"
                                                      onClick={() => Change(row.id, row.status)}>Change Status</Button>)}

                </>)
            ) : null
        },

    ];


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {data.length != 0 ? <Table data={data} columns={columns} click={clickhandler}/> : ""}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReceiverOrderList
