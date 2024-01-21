import  { useState, useEffect } from 'react';
import Topbar from '../components/topbar';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();

  useEffect(() => {
    const storedUsers = localStorage.getItem('registeredUsers');
   
  
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers));
    }
  }, []);
  

  const handleLogin = () => {

   

    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    console.log('Matching user:', user)
  
    if (user) {
      // Successful login
      toast.success(`Welcome back, ${user.username}!`);
      navigate("/")
      setErrorMessage(''); // Clear any previous error message
    } else {
      // Failed login
      setErrorMessage('Invalid username or password');
      toast.error('Login failed. Invalid username or password.');
    }
  };
  

  return (
    <>
      <Topbar />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">Login</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 flex mx-auto rounded hover:bg-blue-700 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>

        <Link to="/register">
          <h3 className="text-green-800 mt-7 text-right cursor-pointer hover:text-blue-800">
            Not Registered? Register here.
          </h3>
        </Link>

        {/* ToastContainer for displaying toasts */}
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
