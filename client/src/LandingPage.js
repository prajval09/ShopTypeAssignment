import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  const username = 'User'; // Replace with actual username

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 text-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Welcome, {username}</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
            Logout
          </button>
        </div>
        <p className="mb-6 text-lg">This is the landing page that you are redirected to after login.</p>
        <iframe 
          src="https://prajval09.github.io/Portfolio/" 
          title="Hosted Site"
          className="w-full h-96 border rounded-lg"
        ></iframe>
        <div className="space-y-4 mt-6">
          <a href="https://prajval09.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="block text-blue-500 hover:underline">My Portfolio</a>
          <a href="https://www.linkedin.com/in/prajwalpatil09/" target="_blank" rel="noopener noreferrer" className="block text-blue-700 hover:underline">LinkedIn</a>
          <a href="https://prajval09.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="block text-green-500 hover:underline">My Website</a>
          <a href="https://github.com/prajval09" target="_blank" rel="noopener noreferrer" className="block text-gray-800 hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
