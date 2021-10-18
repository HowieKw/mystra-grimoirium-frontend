import { NavLink, Link } from "react-router-dom";

const NavBar = ({ currentUser, handleLogout }) => {

    // let path = "/"
    return(
        <div>
            <nav>
            {/* <Link to={path}>
                <h1 className="appTitle">HERO FILES</h1>
            </Link> */}
        
                <button onClick={handleLogout} className="fakeNavButt">Logout</button>
                {/* <NavLink className="navButt" exact to="/Heroes">
                    Heroes
                </NavLink>
                <NavLink className="navButt" exact to="/Favorite_Heroes">
                    Favorite Heroes
                </NavLink> */}
            </nav>
        </div>
    )
}

export default NavBar;