import React from 'react'
import { useState, useEffect } from 'react';

export const Test3 = () => {

  const [currentUserId, setCurrentUserId] = useState('');
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (token) {
      try {
        const user = JSON.parse(atob(token.split('.')[1])); // Decoding the JWT payload
        setCurrentUserId(user.id);

      } catch (error) {
        console.error('Error decoding the JWT payload:', error);
        // Handle any error that may occur during decoding
      }
    }
  }, [token]);

  return (
    <div>{currentUserId}</div>
  )
}
