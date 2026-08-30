import React from 'react'

const UserCard = ({UserDetails}) => {
  return (
    <div className='bg-red-500 gap-5 p-5 m-5'>
      <h1>{UserDetails.id}</h1>
      <h1>{UserDetails.name}</h1>
      <h1>{UserDetails.age}</h1>
       </div>
  );
};

export default UserCard
