import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/baseUrl';



function Hometable({ displayData,removeUser }) {
    console.log(displayData);
    return (
        <>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Profile</th>
                        <th>Action </th>
                    </tr>
                </thead>

                <tbody>
                    {

                        displayData.length > 0 ?

                            displayData.map((item, index) => (



                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.fname}{item.lname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td><Button className={item.success==="Active"?"btn btn-success":"btn btn-grey"}>{item.status}</Button></td>
                                    <td><img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={`${BASE_URL}/uploads/${item.profile}`} alt="no image" /></td>
                                    <td>
                                        <Link to={`/view/${item._id}`}><i class="fa-solid fa-eye fs-3 me-2 " style={{color:'grey'}}></i></Link>
                                        <Link to={`/edit/${item._id}`}><i class="fa-solid fa-pen fs-3 me-2" style={{color:'grey'}}></i></Link>
                                        <span onClick={()=>removeUser(item._id)}><i class="fa-solid fa-trash fs-3 me-2 text-danger"></i></span>
                                    </td>
                                </tr>

                            )):<tr className='text-danger mt-5 w-100'>
                        nothing to display
                    </tr>

                    }
                </tbody>
            </Table>

        </>
    )
}

export default Hometable