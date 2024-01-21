import  { useState,useEffect } from 'react';
import Topbar from '../components/topbar';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import '../pages/toastStyles.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
  const handleRegister = () => {
    const isUserTaken = registeredUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (!isUserTaken) {
      setRegisteredUsers((prevUsers) => [...prevUsers, { username, email, password }]);
      
      localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, { username, email, password } ]));
      setErrorMessage('');
      toast.success('Registered successfully');
      navigate("/")
    } else {
      setErrorMessage('Username or email already taken');

      toast.error('Registration failed. Username or email already taken.');
    }
  };

  return (
    <>
    <Topbar/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">Register</h2>
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
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        className="bg-blue-500 text-white py-2 px-4 flex  mx-auto rounded hover:bg-blue-700 focus:outline-none"
        onClick={handleRegister}
      >
     
        Register
      </button>

      <Link to="/login"><h3 className='text-green-800 mt-7 text-right cursor-pointer hover:text-blue-800'>Already Registered?</h3></Link>
      <ToastContainer />
    </div>
    </>
  );
};

export default RegistrationPage;
