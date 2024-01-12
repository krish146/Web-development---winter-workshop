// Import icons from react-icons library
import './index.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        {/* You can replace the placeholder icon with your own */}
        <img src="/welcome.jpg"  />
        <img src="welcomejpg"></img>
        <span className="brand">Boss of Burgers*</span>
      </div>
      <div className="right">
        {/* <FaHome className="icon" />
        <FaPhone className="icon" />
        <FaSearch className="icon" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
