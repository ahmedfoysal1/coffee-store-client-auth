import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to={'/'}> <button className="btn">Home</button> </Link>    
            <Link to={'/addcoffee'}> <button className="btn">Add Coffee</button> </Link>          
        </div>
    );
};

export default Navbar;