import React, { useEffect, useState } from 'react'
import '../CSS/contactus.css';

function Contactus() {
    
    return ( 
        <div className="contact-container">
            <div className='contact-outer'>
            <div className='contact-left'><br/>
                <h1 style={{textAlign:"center"}}>Contact Us</h1><br/>
                <p>We value your feedback, suggestions, and inquiries. If you have any questions or need assistance with our project management system, please don't hesitate to reach out to us. Our dedicated support team is here to help.</p>
<p>
You can contact us through the following channels:<br/>

Email: support@tenacity.com<br/>
Phone: [+91-876-567-2397]<br/>
Address: [34 Main Street, Chennai, Tamilnadu, 600 013]<br/>
</p><p>
Additionally, you can connect with us on social media:<br/>

Facebook: facebook.com/TenacityNetwork<br/>
Twitter: @TenacityNetwork<br/>
LinkedIn: linkedin.com/TenacityNetwork<br/>
</p>
<p>We look forward to hearing from you and assisting you with your project management needs. Your success is our priority, and we are committed to providing exceptional support and service.</p>

                
                
            </div>
            <div className='contact-right'>
                
            </div>
            </div>
        </div>
     );
}

export default Contactus;