import React from 'react'
import { Link } from "react-router-dom";




export default () => {
    return (
        <div >
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                <Link className={"navbar-brand"} to="/">Blog</Link>
                <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarNav">
                    <ul className={"navbar-nav"}>
                        <li className={"nav-item active"}>
                            <Link className={"nav-link"} to="/">Posts <span className={"sr-only"}>(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/create">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/about">About</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}