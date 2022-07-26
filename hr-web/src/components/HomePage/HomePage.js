import React from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu';

const HomePage = () => {
  return (
    <div>
    <Navbar />
    <div className='container' style={{margin: "100px 100px"}}>  
            
            <div className='customDiv' style={{width: "25%", marginRight: "10%"}}>
              <Menu/>
            </div>
            
            <button type="button" style={{marginLeft: "40%", border: "1px solid #BBDEFB" }} class="customBtn">
                <span>Time & Expense</span> 
            </button>
            <button type="button" style={{marginLeft: "10%", border: "1px solid #D1C4E9", backgroundColor: "#D1C4E9" }} class="customBtn btn btn-sm btn-secondary">
                <span>System Admin</span> 
            </button>
    </div>
    </div>  
  )
}

export default HomePage