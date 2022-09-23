import React from "react";
import {Container} from "@mui/material";
import {Col, Row} from "react-bootstrap";
import Table from "../DataTable";
import axios from "axios";
import Button from "@mui/material/Button";


const OrderRequest = ({data}) => {

    const clickhandler = name => console.log("delete", name);

    const requestOrder = (row) => {

        console.log({
            name: row,
            email: row.email,
            request_by_user_id: row.id,
            user_id: localStorage.getItem("user_id"),
        })

        axios.post("http://localhost:8000/api/order-request", {
            name: row.name,
            email: row.email,
            address: row.address,
            request_by_user_id: row.id,
            user_id: localStorage.getItem("user_id"),
        })
            .then((data) => {
                console.log(data)
                alert('Request send ')
            }).catch((data) => {

        });
    }


    const columns = [
        {
            name: "Buttons",
            button: true,
            grow: 5,
            cell: row => row.showButtons ? (
                (<>
                    <Button variant="outline-primary"
                            onClick={() => requestOrder(row)}>Request</Button>

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

    ];

    return (
        <>
            <Container>
                <Row>
                    <Col>
                       <Table data={data} columns={columns} click={clickhandler}/>
                    </Col>
                </Row>
            </Container>

        </>
    )


}

export default OrderRequest;
