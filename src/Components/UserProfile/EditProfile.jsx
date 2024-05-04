import React, { useState } from 'react';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EditProfile() {
    const [user, setUser] = useState({
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'user@gmail.com',
        phone: '9876543210'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <div className="bg p-2 ">Edit Profile</div>
            <div className="bg h-30 center"><FontAwesomeIcon icon={faCircleUser} className="px-1 r-user-icon white" /></div>
            <div>
            <div className='p-2'>
                <div className="sub-title">First Name</div>
                <input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} className="input-field" />
            </div>
            <div className='p-2'>
                <div className="sub-title">Last Name</div>
                <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} className="input-field" />
            </div>
            <div className="center my-2">
            <div className="p-btn">Submit</div>
            </div>
            </div>
            <div className='p-2'>
                <div className="d-flex justify-content-between"><div className="sub-title">Mobile Number</div> <div className="blue rem7 mx-3 ">Update</div></div>
                <input type="text" name="phone" value={user.phone} onChange={handleInputChange} className="input-field" />
            </div>
            <div className='p-2'>
            <div className="d-flex justify-content-between"><div className="sub-title">Email ID</div> <div className="blue rem7 mx-3 ">Verify</div></div>
                <input type="text" name="email" value={user.email} onChange={handleInputChange} className="input-field" />
            </div>
        </div>
    );
}

export default EditProfile;
