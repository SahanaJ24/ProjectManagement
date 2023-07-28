import React from 'react'
import '../CSS/profile.css';

function Profile() {
    return ( <div className='pro-entire'>
                <div className='pro-container'>
                    <div className='pro-left'>
                        <div className='pro-head'>Profile Settings </div>  
                        <div className='pro-lbox'>
                        <label>Name</label><br/>
                        <input className='pro-input' type='text' name='name'/> <br/><br/>

                        <label>Mobile Number</label><br/>
                        <input className='pro-input' type='number' name='mobile'/><br/><br/>

                        <label>Email</label><br/>
                        <input className='pro-input' type='email' name='mail'/><br/><br/>

                        <label>Education</label><br/>
                        <input className='pro-input' type='text' name='education'/><br/><br/>

                        <label>Address Line 1</label> <br/>
                        <input className='pro-input' type='text' name='line1'/><br/><br/>

                        <label>Address Line 2</label> <br/>
                        <input className='pro-input' type='text' name='line2'/><br/><br/>

                        

                        <button className='pro-button'>Save Profile</button>
                        </div>
                    </div>
                    <div className='pro-right'>
                    <div className='pro-rbox'>
                    <label>City</label><br/>
                        <input className='pro-input' type='text' name='city'/><br/><br/>

                        <label>Post Code</label><br/>
                        <input className='pro-input' type='number' name='postcode'/><br/><br/>

                        <label>State</label><br/>
                        <input className='pro-input' type='text' name='state'/><br/><br/>

                        <label>Country</label><br/>
                        <input className='pro-input' type='text' name='country'/><br/><br/>

                        <label>Experience</label><br/>
                        <input style={{height:"13vh"}} className='pro-input' type='text' name='exp'/><br/><br/>
                        </div>
                    </div>
                </div>
            </div> );
}

export default Profile;