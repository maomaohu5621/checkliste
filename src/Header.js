import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">LOGO</Link>
                </li>
                <li>
                    <Link to="/highlevel">High Level</Link>
                </li>
                <li>
                    <Link to="/branding">Branding</Link>
                </li>

            </ul>
        </div>
    )

}

export default Header;