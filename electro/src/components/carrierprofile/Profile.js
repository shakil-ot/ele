import React, {useEffect, useState} from 'react';
import personimage from "../../images/Portrait_3.jpg";
import "./carrier.css";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import axios from "axios";

const Profile = () => {

    const [checked, setChecked] = React.useState(true);
    const [name, setName] = useState('loading..');
    const [address, setAddress] = useState('loading..');
    const [phone, setPhone] = useState('loading..');
    const [joining, setJoining] = useState('loading..');
    const [email, setEmail] = useState('loading..');
    const [rating, setRating] = useState(0);

    const handleChange = (event) => {
        console.log(event.target.checked)
        axios.post("http://localhost:8000/api/user-status-change", {
            user_id: localStorage.getItem("user_id"),
            status : event.target.checked,
        }).then((data) => {
            console.log(data.data.data)
        }).catch((data) => {  });

        setChecked(event.target.checked);
    };
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    useEffect(() => {
        axios.post("http://localhost:8000/api/get-user-by-id", {
            user_id: localStorage.getItem("user_id")
        }).then((data) => {


            setName(() => data.data.data.name)
            setAddress(() => data.data.data.address)
            setPhone(() => data.data.data.phone)
            setJoining(() => formatDate(data.data.data.created_at) )
            setEmail(() => data.data.data.email)
            setChecked(() => data.data.data.status)
        }).catch((data) => {  });

        axios.post("http://localhost:8000/api/rating-avg", {
            user_id: localStorage.getItem("user_id")
        }).then((data) => {
            setRating(data.data.data.rating)
        }).catch((data) => {  });


    }, [])


    const ratingShow = () => {
        let rt = [];
        for (let i = 0; i <=rating; i++){
            rt.push(<StarRateIcon/>);
        }
        return rt;
    }

    return (
        <div>
            <div className='p-main-div'>
                <div className='profile-information'>
                    <div className='info-side'>
                        <table className='info-list'>
                            <tr>
                                <th>Name</th>
                                <td> : </td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td> : </td>
                                <td>{address}</td>
                            </tr>

                            <tr>
                                <th>Phone</th>
                                <td> : </td>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <th>joining</th>
                                <td> : </td>
                                <td>{joining}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td> : </td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td>:</td>
                                <td className='d-flex'>
                                    {ratingShow()}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='image-side'>
                        <div className='image-div'>
                            <img src={personimage} alt=''/>
                        </div>
                        <div class="status">
                            <span>status: </span>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography>Off</Typography>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{'aria-label': 'controlled'}}
                                />
                                <Typography>On</Typography>
                            </Stack>
                        </div>
                        <div className='profile-btns'>
                            <button class="call-mail-btn call">call</button>
                            <button class="call-mail-btn mail">e-mail</button>
                        </div>


                    </div>

                </div>

                <div>
                    <div className="data-widgat-div">
                        <div className="data-widgate">
                            <h3>total delivered</h3>
                            <hr></hr>
                            <h4>15</h4>
                        </div>
                        <div className="data-widgate">
                            <h3>total delivered</h3>
                            <hr></hr>
                            <h4>15</h4>
                        </div>
                        <div className="data-widgate">
                            <h3>total delivered</h3>
                            <hr></hr>
                            <h4>15</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
