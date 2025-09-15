import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUsers } from '../context/UserContext';

const UserDetails = () => {
  const { id } = useParams();
  const { state } = useUsers();
  const user = state.users.find(u => u.id === parseInt(id));

  if (!user) return <div>User not found</div>;

  return (
    <div className="user-details">
      <Link to="/">← Back to Dashboard</Link>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      
      <h2>Address</h2>
      <p>{user.address?.street}, {user.address?.city}</p>
      <p>Zipcode: {user.address?.zipcode}</p>
      <p>
        <strong>Geo:</strong> 
        Lat: {user.address?.geo?.lat}, 
        Lng: {user.address?.geo?.lng}
      </p>
    </div>
  );
};

export default UserDetails;
