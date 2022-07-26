import React, {Fragment, useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {useLocation} from 'react-router-dom';
import axiosInstance from '../../helpers/axiosInstance';

const ManageUsers = () => {

    const location = useLocation();
    const [hourlyWage, sethourlyWage] = useState({
        hourlyWage: '',
    });
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userType: '',
        mobilePhone: '',
        gender: '',
        annualSalary: '',
        dateOfBirth: '',
    })
    const [editUser, setEditUser] = useState(user)
    const [msg, setMsg] = useState(false)
    const [err, setErr] = useState(false)
    const [err2, setErr2] = useState(false)
    const [updateMsg, setUpdateMsg] = useState(false)
    const id = location.state.id

    useEffect(() => {
        if (id !== 0) {
            axiosInstance()
            .get(`/users/${id}`)
            .then((response) => {
                console.log(response)
                setUser({
                    ...user,
                    ...response.data
                })
            })
        }
        console.log(user)
    }, [])

    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleInputChange = (e) => {
        
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }

    const updateHandler = (e) => {
        e.preventDefault()
        console.log(user)
        if (user.firstName != '' && user.lastName != '' && user.email != '' && user.userType != '' 
        && user.mobilePhone != '' && user.gender != '' && user.annualSalary != '' && user.dateOfBirth != '') {
            axiosInstance()
                .put(`/users/${id}`, user)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        console.log(response.status)
                        setUpdateMsg(true)
                        setErr2(false)
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error))
                });
        } else {
            setErr2(true)
        }
            
    }

    const saveHandler = (e) => {
        e.preventDefault()
        console.log(user)
        if (user.firstName != '' && user.lastName != '' && user.email != '' && user.userType != '' 
        && user.mobilePhone != '' && user.gender != '' && user.annualSalary != '' && user.dateOfBirth != '') {
            axiosInstance()
            .put(`/users`, user)
            .then((response) => {
                console.log(response)
                setMsg(true)
                if (response.status == 201) {
                    console.log(response.status, "inside")
                    setMsg(true)
                    setUser({
                        firstName: '',
                        lastName: '',
                        email: '',
                        userType: '',
                        mobilePhone: '',
                        gender: '',
                        annualSalary: '',
                        dateOfBirth: '',
                    })
                    setErr(false)
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error))
              });
        } else {
            setErr(true)
        }
        
    }
 

  return (
    <Fragment>
        <Navbar />
        <div className='container' style={{marginTop: "80px"}}> 
        { err == true ? (
            <div class="alert alert-danger" role="alert">
            Please Enter All Fields!
        </div>) : null}
        { err2 == true ? (
            <div class="alert alert-danger" role="alert">
            Please Enter All Fields!
        </div>) : null}
        
        { msg == true ? (<div class="alert alert-success" role="alert">
            User Created Successfully!
        </div>) : null}
        { updateMsg == true ? (<div class="alert alert-success" role="alert">
            User Updated Successfully!
        </div>) : null}
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="btn br" style={{backgroundColor: '#037bfc', color:'white'}}>Personal Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Emergency Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Payment</a>
                </li>
            </ul>
            <div className='insideContainer'>
                <div class="login-form">
                    <div class="main-div" style={{maxWidth: "100%", padding: "50px 30px 20px 30px"}}>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">First Name</label>
                                <input type="text" name='firstName' class="form-control"  placeholder="Enter First Name" defaultValue={user.firstName} value={user.firstName} onChange={handleInputChange} required />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input type="text" name='lastName' class="form-control"  placeholder="Enter Last name" defaultValue={user.username} value={user.lastName} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" name='email' class="form-control" placeholder="Enter Email" value={user.email} onChange={handleInputChange} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">User Type</label>
                                <select name='userType' class="form-control form-control-sm" aria-label="Default select example" value={user.userType} onChange={handleInputChange}>
                                    <option>Select</option>
                                    <option value="EMPLOYEE">Employee</option>
                                    <option value="CONSULTANT">Consultant</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Date of Birth</label>
                                <input name='dateOfBirth' type="date" class="form-control" placeholder="DOB" value={user.dateOfBirth} onChange={handleInputChange} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Gender</label>
                                <select name='gender' class="form-control form-control-sm" aria-label="Default select example" value={user.gender} onChange={handleInputChange}>
                                    <option>Select</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Mobile</label>
                                <input name='mobilePhone' type="tel" class="form-control" placeholder="Enter your Mobile Number" value={user.mobilePhone} onChange={handleInputChange} />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Annual Salary</label>
                                <input name='annualSalary' type="text" class="form-control"  placeholder="Enter Annual Salary" value={user.annualSalary} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Hourly Rated</label>
                                <input name='hourlysalary' type="text" class="form-control" value={(user.annualSalary / 1920).toFixed(2)} disabled/>
                            </div>
                            <div class="form-group col-md-6">
                            
                            </div>
                        </div>
                        <br /> <br />
                        { id === 0 ? 
                            <button class="btn" type='submit' onClick={saveHandler} style={{color:"white", backgroundColor: "#037bfc", marginTop: "30px", marginLeft:"70%",  width: "150px"}}>Save</button> 
                            :   <button class="btn" type='submit' onClick={updateHandler} style={{color:"white", backgroundColor: "#037bfc", marginTop: "30px", marginLeft:"70%",  width: "150px"}}>Update</button> 
                        }
                        
                    </form>
                    </div>               
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ManageUsers