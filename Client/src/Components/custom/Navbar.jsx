import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.reload();
  };
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ y: "-50px"}}
        animate={{ y: "0px" }}
        transition={{ delay:1,ease:"easeInOut"}}
      >
        HabitTracker
      </motion.div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/habits">Habits</Link>
            </li>
            <li>
              <Link to="/progress">Progress</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-color: white;
          color: black;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .logo {
          font-size: 22px;
          font-weight: bold;
          color: #4CAF50;
        }
        .nav-links {
          list-style: none;
          display: flex;
        }
        .nav-links li {
          margin: 0 15px;
        }
        .nav-links a {
          text-decoration: none;
          color: black;
          font-size: 16px;
          transition: 0.3s ease;
        }
        .nav-links a:hover {
          color: #4CAF50;
        }
        .logout-btn {
          background: none;
          border: none;
          color: black;
          cursor: pointer;
          font-size: 16px;
        }
        .logout-btn:hover {
          color: #4CAF50;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
