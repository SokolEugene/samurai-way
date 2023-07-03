import {Navbar} from "./Navbar";
import {Profile} from "./Profile";
import React from "react";

export const Maincontent = () => {
    return (
        <div className="content-wrapper">
            <Navbar/>
            <Profile/>
        </div>
    )
}