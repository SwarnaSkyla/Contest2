import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Send a GET request to fetch user data
    fetch(`https://dummyjson.com/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        // Save the user object with all details using Redux
        // You might need to adjust the structure of the data based on the API response
        dispatch({ type: 'SAVE_USER_DETAILS', payload: data });
      });
  }, [user.id, dispatch]);

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default Profile;
