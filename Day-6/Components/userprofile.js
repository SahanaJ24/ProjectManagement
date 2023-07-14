import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../Components/actions';
import '../CSS/profile.css';
import { Link } from 'react-router-dom'; 

class UserProfile extends React.Component {
  componentDidMount() {
    // Simulating fetching user data from an API
    const user = {
      username: 'Sahana',
      email: '727721euit134@skcet.ac.in',
      bio: 'Full Stack Developer',
      position:'Admin',
      dob:'24.08.2023',
      num:'8976455345'
    };

    this.props.setUser(user);
  }

  render() {
    const { username, email, position,dob,num } = this.props.user;

    return (
      <div className='profile'>
        <div className='head1'>
        <h1>USER PROFILE</h1>
        </div>
        <div className='head2'>
        </div>
        <div className='head3'>
            <ul>
            <li>Username :  {username}</li>
            <li>Email :  {email}</li>
            <li>Position :  {position}</li>
            <li>Date of Birth :  {dob}</li>
            <li>Mobile Number :  {num}</li>
            <br></br>
            </ul> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
