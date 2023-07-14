import React from 'react';
import '../CSS/profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='every'>
        <div className='header'>
          <h2>Profile</h2>
        </div>
        <div className='body'>
          <div className='bodyleft'>
          <div className="project-list">
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689245097/Screenshot_2023-07-13_at_4.12.45_PM_pwsx6s.png" alt="Project 1" />
              
              <p>Random Quote Generator</p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689245523/Screenshot_2023-07-13_at_4.20.37_PM_kynnfj.png" alt="Project 2" />
              
              <p>Markdown preview</p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689246032/Screenshot_2023-07-13_at_4.30.04_PM_ybmdpv.png" alt="Project 3" />
              
              <p>Website</p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689245896/image1_wkjbch.avif" alt="Project 4" />
              
              <p>Expense Tracker</p>
            </div>
          </div>
          </div>
          <div className='bodyright'>
          <p>

          Hello everyone! My name is Nicolus. I am from Mumbai, Maharashtra. I am a fresh graduate 
          excited to embark in the IT field. I've completed my initial studies from St. Thomas International 
          School. After that I pursued B.Sc. in Computer Science from XYZ Technical Institute. I graduated 
          with 88%. Growing up, I have always been attracted to computers and technology. As soon as I could,
           I taught myself the skills needed to make a successful career in the IT field. During my studies,
            I have gained knowledge in networking, coding, design, and system security. I am an organized and 
            motivated individual with a strong sense of ethics and an eagerness to succeed. With my technical 
            knowledge and strong problem-solving skills, I am confident that I will be a great asset to the 
            company. Thank you.
</p> 
          </div>
        </div>
             {/* <Link to='/Sidebar'>
                 <button style={{float:'right'}}>Back</button><br/>
         </Link> */}
    </div>
      
  );
};

export default Profile;