import React from 'react';
import './Navbar.css';
import {useEffect} from "react";
import {useState} from "react";

function Navbar(props) {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img className="navbar__logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                 alt="Netflix"/>

            <img className="navbar__profile"
                 src="https://occ-0-1168-299.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXG4IfKv37mROzMdy502JmziP1ttoh_et7TQR-ijs_fpI325B07knuKbxd-a7rbMT4hPwMdEclxupPfoUxLBlUThVbW3.png"
                 alt="Issac"/>
        </div>
    );
}

export default Navbar;