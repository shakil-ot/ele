import React, {useEffect, useState} from 'react';
import "./rcv.css";
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import Table from "../DataTable";
import axios from "axios";

const steps = [
    'confirmed',
    'picked',
    'on the way',
    'door step',
    'delivered'
];

const SendOrderList = ({}) => {
    const [data, setData] = useState([])

    const clickhandler = name => console.log("delete", name);

    useEffect(() => {

        axios.post("http://localhost:8000/api/order-request-send",
            {
                user_id: localStorage.getItem("user_id"),
            }).then((data) => {
            let response = data.data.data

            console.log(response)
            setData(() => response)
        }).catch((data) => {
        });


    }, [])

    const processStatus = (status) => {
        if (status == 0) {
            return "Pending";
        }
        if (status == 1) {
            return "Processing";
        }

        if (status == 2){
            return "delivered"
        }

    }

    const columns = [
        {
            name: "Process Status",
            button: true,
            grow: 6,
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
            grow: 3
        },
        {
            name: "Address",
            selector: "address",
            sortable: true,
            grow: 3
        },
        {
            name: "Email",
            selector: "email",
            sortable: false,
            hide: "sm",
            grow: 2
        },

    ];


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {data.length != 0 ?
                            <Table data={data} columns={columns} click={clickhandler}/> : "Data not found "}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SendOrderList
