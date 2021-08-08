import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <NavLink to="/"><p id="home-link">Return Home</p></NavLink>
        </div>
    )
}

export default Footer
