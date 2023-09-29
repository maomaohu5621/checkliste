import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">LOGO</Link>
                </li>
                <li>
                    <Link to="/highlevel">High Level</Link>
                </li>
                <li>
                    <Link to="/highlevelbereiche">HighLevel Bereiche</Link>
                </li>
                <li>
                    {/* <Link to="/highlevelbereiche/Branding">Branding</Link> */}
                </li>

            </ul>
        </div>
    );

};

export default Header;