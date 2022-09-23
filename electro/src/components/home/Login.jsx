import React, { useState, useRef, useLayoutEffect } from 'react';
import "./home.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  } from "react-router-dom";
import Footer from "../layout/Footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user;
    const onInputCahnge = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/login", user).then((data) => {
            console.log(data)
           localStorage.setItem('login',data.data.access_token)
           localStorage.setItem('user_id',data.data.user.id)
            navigate('./Cprofile', { replace: true });

            // window.location.href = "http://localhost:3000/Cprofile";

        }).catch((data) => {
            console.log(data)
            alert("Email or Password not match !!")
        });
    }


    const componentRef = useRef()
    useLayoutEffect(() => {
        console.log(componentRef.current.clientHeight)
        const fheight = componentRef.current.clientHeight;
        const maincontent = document.querySelector('.main_content');
        maincontent.style.marginBottom = `${fheight}px`;
    })

    return (
        <>
            <div className='loginpage'>
                <div className='home-login-div main_content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='homepage-img-div'>
                                    <img src='' />
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-div '>
                                    <form className='login-form'>
                                        <TextField className='login-data-input'
                                            id="outlined-basic"
                                            label="Email"
                                            variant="outlined"
                                            name="email"
                                            value={email}
                                            onChange={onInputCahnge}

                                        />

                                        <TextField style={{ borderColor: `#c9312c` }}
                                            className='login-data-input'
                                            id="outlined-basic"
                                            label="password"
                                            variant="outlined"
                                            onChange={onInputCahnge}
                                            name="password"
                                            value={password}

                                        />
                                        <div className='login-btn'>
                                            <Button style={{ backgroundColor: `#c9312c` }}  onClick={onSubmitForm} variant="contained" >login</Button>
                                        </div>
                                        <div className='to-register-div mt-3'>
                                            {/*<p>if you don't have account, <a to="/">Register now</a> </p>*/}
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <Footer componentRef={componentRef} />


            </div>
        </>
    )
}
export default Login;
