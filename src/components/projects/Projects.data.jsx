
import {SiGithub,SiTailwindcss,SiBootstrap,SiCss3,SiHtml5  ,SiMysql   ,SiReact,SiNodedotjs,SiExpress ,SiJavascript   } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export const CardProjects = [{
    id:0,
    title:'Empresa de seguros',
    description:'Gestión de clientes, pólizas, pagos y siniestros ',
    imageUrl:'https://res.cloudinary.com/dphsynf6f/image/upload/v1691699825/portfolio/titronic/logintitronic.png',
    skills:[
     
        {
            id:"0",
            icon: <SiHtml5  size={40} color="white"/>
        },
        {
            id:"1",
            icon:<SiCss3 size={40} color="white"/>
        },
        {
            id:"2",
            icon: <SiBootstrap size={40} color="white"/>
        },
        {
            id:"3",
            icon: <SiJavascript  size={40} color="white"/>
        },
        {
            id:"4",
            icon: <SiExpress  size={40} color="white"/>
        },
        {
            id:"5",
            icon: <SiMysql  size={40} color="white"/>
        }
    ],
    link:'https://www.linkedin.com/feed/update/urn:li:activity:7113929481504849920/'
},
{
    id:1,
    title:'Pokedex',
    description:'Primera app realizada para aprender como funcionan las APIs',
    imageUrl:'https://res.cloudinary.com/dphsynf6f/image/upload/v1680556410/portfolio/pokedex/lhxdghfwa8qpitmcmcou.png',
    skills:[
      
        {
            id:"0",
            icon: <SiHtml5 size={40} color="white"/>
        },
        {
            id:"1",
            icon: <SiCss3 size={40} color="white"/>
        },
        {id:"2",
            icon: <SiJavascript size={40} color="white"/>
        },
     
        
    ],
    link:'https://pokedexuli.000webhostapp.com/'
},
{
    id:2,
    title:'Drag and drop',
    description:'Aplicación para practicar la carga de imágenes',
    imageUrl:'https://res.cloudinary.com/dphsynf6f/image/upload/v1691765190/portfolio/imgDragAndDrop/index.png',
    skills:[
      
        {
            id:"0",
            icon: <SiHtml5 size={40} color="white"/>
        },
        {
            id:"1",
            icon: <SiCss3 size={40} color="white"/>
        },
        {
            id:"2",
            icon: <SiJavascript size={40} color="white"/>
        },
        {
            id:"3",
            icon: <SiExpress  size={40} color="white"/>
        },
        
    ],
    link:'https://draganddropau.onrender.com/'
},

]