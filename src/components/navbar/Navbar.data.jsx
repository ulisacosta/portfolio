import {  SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

export const dataNavbar = [{
    name:"home",
    path:"/",
    icon:<FaHome size={38} color="white"/>,
},
{
    name:"about",
    path:"/about",
    icon:<FaInfoCircle size={38} color="white"/>,
},
/* {
    name:"services",
    path:"/services",
    icon:<FaInfoCircle size={38} color="white"/>,
}, */
{
    name:"projects",
    path:"/projects",
    icon:<GoRepo size={38} color="white"/>,
},
]

export const dataNavbarSM = [{
    name:"Linkedin",
    link:"https://www.linkedin.com/in/adolfo-ulises-martin-acosta/",
    icon:<SiLinkedin size={38} color="white"/>
},
{
    name:"Instagram",
    link:"https://www.instagram.com/ulisacosta/",
    icon:<SiInstagram size={38} color="white"/>
},
{
    name:"Github",
    link:"https://github.com/ulisacosta",
    icon:<SiGithub size={38} color="white"/>
},


]