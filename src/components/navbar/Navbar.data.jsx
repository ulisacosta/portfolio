import {  SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

export const dataNavbar = [{
    id:"0",
    name:"home",
    path:"/",
    icon:<FaHome size={38} color="white"/>,
},
/* {
    id:"2",
    name:"about",
    path:"/about",
    icon:<FaInfoCircle size={38} color="white"/>,
}, */
{
    id:"1",
    name:"projects",
    path:"/projects",
    icon:<GoRepo size={38} color="white"/>,
},
]

export const dataNavbarSM = [{
    id:"0",
    name:"Linkedin",
    link:"https://www.linkedin.com/in/adolfo-ulises-martin-acosta/",
    icon:<SiLinkedin size={38} color="white"/>
},
{
    id:"1",
    name:"Instagram",
    link:"https://www.instagram.com/ulisacostaa/",
    icon:<SiInstagram size={38} color="white"/>
},
{
    id:"2",
    name:"Github",
    link:"https://github.com/ulisacosta",
    icon:<SiGithub size={38} color="white"/>
},


]