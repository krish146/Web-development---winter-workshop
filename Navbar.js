import {Link} from "react-router-dom";
const Navbar = () => {
    return (  
        <div className="head">
            <nav className="navbar">
                <h1>Krish's Virtual Restaurant</h1>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/#bottom" >About</Link></li>
                    <li><Link to="/Review" >Review</Link></li>
                </ul>
            </nav>
        </div>
       
    );
}
 
export default Navbar;