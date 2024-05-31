import React from 'react'
import { SiCss3, SiDocker, SiExpress, SiHtml5, SiJavascript, SiMysql, SiReact, SiTailwindcss } from 'react-icons/si'
import { GrMysql } from "react-icons/gr";
const iconSize = 55;
export const SkillsData = [
    {
        id:0,
        skill:'HTML',
        icon:<SiHtml5 size={iconSize} color="#e44d26"/>
    },
    {
        id:1,
        skill:'CSS',
        icon:<SiCss3 size={iconSize} color="#2465f1"/>
    },
    {
        id:2,
        skill:'JavaScript',
        icon:<SiJavascript size={iconSize} color="yellow"/>
    },
    {
        id:3,
        skill:'Express',
        icon:<SiExpress size={iconSize} color="white"/>
    },
    {
        id:4,
        skill:'Tailwind',
        icon:<SiTailwindcss size={iconSize} color="white"/>
    },
    {
        id:5,
        skill:'MySQL',
        icon:<GrMysql size={iconSize} color="white"/>
    },

    {
        id:6,
        skill:'React',
        icon:<SiReact size={iconSize} color="#087EA4" />
    },
    {
        id:7,
        skill:'Docker',
        icon:<SiDocker size={iconSize} color="#087EA4" />
    },
]

