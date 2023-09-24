import React from 'react';

import "./404.css"
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="four">
            <div>404 Not Found</div>
            <Link to={"/"} className="come">Come Back</Link>
        </div>
    );
}

export default NotFound;