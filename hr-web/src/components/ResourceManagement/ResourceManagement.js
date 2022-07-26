import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import axiosInstance from '../../helpers/axiosInstance'
import axios from 'axios'

const ResourceManagement = () => {

    const [name, setName] = useState("")
    const [userType, setUserType] = useState("")
    const [users, setUsers] = useState([])
    const [msg, setMsg] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleUserType = (e) => {
        setUserType(e.target.value)
    }

    const deleteHandler = (userId, e) => {
        console.log(userId)
        axiosInstance()
            .delete(`/users/${userId}`)
            .then((response) => {
                console.log(response)
                setMsg(true)
            })
            .catch(function (error) {
                console.log(JSON.stringify(error))
            });

        searchHandler(e)
        window.location.reload(false);
    }

    const data = {}

    const searchHandler = async (e) => {
        e.preventDefault()
        data["name"] = name
        data["userType"] = userType
        console.log(data)

        axiosInstance()
            .get('/users/summary', { params: data })
            .then((response) => {
                if(response.status == 200)
                    setUsers(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    

  return (
    <Fragment>
        <Navbar />
        <div className='container'> 
            <h3>Resource Management</h3>
            <br />

            <div className='insideContainer'>
                <div class="login-form">
                    <div class="main-div">
                        <form class="form-inline" action='#'>
                            <span>Name: </span>
                            <input type="text" class="form-control form-control-sm" style={{marginRight: "30px"}} value = {name} onChange={handleNameChange} />
                            <span>User Type: </span>
                            <select class="form-control form-control-sm" aria-label="Default select example" value={userType} onChange={handleUserType}>
                                <option value="">Select</option>
                                <option value="EMPLOYEE">Employee</option>
                                <option value="CONSULTANT">Consultant</option>
                            </select>
                            <br /> <br />
                            <button class="btn" onClick={searchHandler} style={{color:"white", backgroundColor: "#037bfc", width: "150px"}}>Search</button>    
                        </form>
                    </div>               
                </div>
            </div>

            <div className='insideContainer'>
                <div class="login-form">
                    <div class="main-div" style={{border: 0, padding:"0px"}}>
                        <Link to={{ pathname: '/form', state: {id: 0} }} class="btn btn-link float-right pull-right" ><span class="glyphicon glyphicon-plus"></span> Add User</Link>

                        <table class="table table-bordered" >
                            <thead class="thead-light">
                                <tr>
                                <th scope="col" className='text-center'>User Name</th>
                                <th scope="col" className='text-center'>Birth Date</th>
                                <th scope="col" className='text-center'>Type</th>
                                <th scope="col" className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            {users.length > 0 ? 
                                users.map(user => (
                                    <tr key={user.id}>
                                        <th><button className='btn btn-link'><u>{user.fullName}</u></button></th>
                                        <td>{user.email}</td>
                                        <td>{user.userType}</td>
                                        <td><Link to={{
                                                pathname: '/form',
                                                state: {id: user.id}
                                            }} class='btn btn-sm'><span class="glyphicon glyphicon-pencil"></span></Link></td> 
                                        <td>
                                            <button onClick={(e) => deleteHandler(user.id, e)} class='btn btn-sm btn-danger'><span class="glyphicon glyphicon-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )) :
                                <tr >
                                    <p className='text-center'>No Data to display.</p>
                                </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
       
    </Fragment>
  )
}

export default ResourceManagement