// Home.js (React Component)


import { Link } from 'react-router-dom'; // If you use React Router for navigation
import Topbar from '../components/topbar';

const Home = () => {
  return (
    <>
    <Topbar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Math Learning Hub</h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          Master the world of Education with our engaging and interactive lessons.
        </p>

        <div className="flex justify-center mb-8">
          {/* Add your logo or illustration here */}
          <img src="math_logo.png" alt="Math Learning Hub Logo" className="h-16 w-16" />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Link to="/courses" className="btn-primary">
            Explore Courses
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
