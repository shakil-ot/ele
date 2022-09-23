import React, {useEffect, useState} from 'react';
import "./carrier.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TotalOrders from "./TotalOrders";
import Profile from "./Profile";
import ReceiverOrderList from "../receiver/ReceiverOrderList"
import axios from "axios";
import OrderRequest from "../orderRequest/OrderRequest";
import SendOrderList from "../receiver/SendOrderList";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (<div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (<Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>)}
        </div>);
}

TabPanel.propTypes = {
    children: PropTypes.node, index: PropTypes.number.isRequired, value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,
    };
}


const CarrierDashboard = () => {
    const [value, setValue] = React.useState(0);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/get-all-current-location", {})
            .then((data) => {
                let response = data.data.data
                if (response.length > 0) {
                    for (let i = 0; i < response.length; i++) {
                        if (localStorage.getItem('user_id') != response[i].id) {
                            response[i].showButtons = true
                        }
                    }
                }
                setData(() => response)
            }).catch((data) => {

        });
    }, [])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (<div className='carrier-dashboard-main'>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                        <Tab label="Profile" {...a11yProps(0)} />
                        <Tab label="total orders" {...a11yProps(1)} />
                        <Tab label="Get order Request " {...a11yProps(2)} />
                        <Tab label="Send order Request" {...a11yProps(3)} />
                        <Tab label="Order Request" {...a11yProps(4)} />

                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <Profile/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TotalOrders/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ReceiverOrderList/>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <SendOrderList/>
                </TabPanel>


                <TabPanel value={value} index={4}>
                    {data.length !== 0 ? <OrderRequest data={data}/> : ""}
                </TabPanel>
            </Box>
        </div>);
}

export default CarrierDashboard;
