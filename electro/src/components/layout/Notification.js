import React from 'react'
import { Link } from 'react-router-dom';
import "./layout.css";

const Notification = () => {
    return (
        <div className='notification-area-div'>
            <ul>
                <li>
                    <Link to="/">
                        <div>
                            <p>new massage from sss</p>
                            <span>1/1/22 </span> <span>1/1/22 </span>
                        </div>
                    </Link>
                </li>
            </ul>
            <div>
                <table>
                    <tr>
                        <td>shop</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                    <td>shipping address</td>
                        <td>:</td>
                        <td></td>
                    </tr>
                    <tr>
                    <td>status</td>
                        <td>:</td>
                        <td>
                            <div>
                                <button>confirm</button>
                                <button>picked</button>
                                <button>on the way</button>
                                <button>door step</button>
                                <button>delivered</button>
                                <button>cancel</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Notification