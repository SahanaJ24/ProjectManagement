import React from 'react'
import '../CSS/firstpage.css';
import { Link } from 'react-router-dom';
function Firstpage() {
    return ( 
        <div className='firstall'>
            <div className='firstinner'>
                <div className='actors'>
                    <div className='actor1'>
                        <Link to='/mlogin'>
                        <div className='first-button1'></div><br/>
                        <button className='first-button' style={{width:"50%",height:"7vh",marginLeft:"10%"}}>Admin</button>
                            
                        </Link>

                    </div>
                    <div className='actor2'>
                        <Link to='/elogin1'>
                        <div className='first-button2'></div><br/>
                        <button className='first-button' style={{width:"50%",height:"7vh",marginLeft:"10%"}}>Employee</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Firstpage;