import React from 'react';

const Profile = ({ data }) => {
  return (
    <div className='outer-profile'>
       {data.map(item => (
    <div className="profile" key={item.id}>
      <h2>{item.first_name} {item.last_name}</h2>
      <p>City: {item.city}</p>
      <p>Zip Code: {item.zip_code}</p>
      <p>Birthday: {item.birthday}</p>
      <p>Description: {item.profile_text}</p>
    </div>
  ))
  }
    </div>
  )
 
};

export default Profile;
    
    
  

