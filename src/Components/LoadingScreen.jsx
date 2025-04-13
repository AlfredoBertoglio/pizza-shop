import React, { useState, useEffect } from 'react';
import Experience from '../Experience';
import logo from '../../public/LoadingPizza.gif';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 200000);
  }, []);

  if (isLoading) {
    return <div id='loader'><img src={logo} alt="loading..."/></div>
  }

  return (
    <Experience/>
  );
}
