import { ReactNode } from "react"
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa"
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript} from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import profile from './img/Profile.jpg'


interface datas {
    about: about,
    skills: skills[],
    projects: projects[],
    contact: contact[]
}

export interface skills {
    habName: string,
    habLevel: (10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100),
    logo: ReactNode
}

interface projects {

    title: string,
    imgPath: string,
    techs: string,
    description: string,
    link: string

}

interface contact {
    contactName: string,
    logo: string,
    link: string,
    }

interface about {
    img: string, 
    resume: string[]
}
    

export const data: datas = {
    about: {
        img: profile, 
        resume: ["Olá!! Meu nome é Jefferson, sou de belo horizonte em MG e sou apaixonado por tecnológia.", "Minha historia com a programacao comecou com meu amor por jogos."]
    },
    skills: [{
        habName: "React",
        habLevel: 10,
        logo: <FaReact />
    },{
        habName: "Node",
        habLevel: 50,
        logo: <FaNode />
    },{
        habName: "javascript",
        habLevel: 60,
        logo: <IoLogoJavascript />
    },{
        habName: "Html",
        habLevel: 60,
        logo: <FaHtml5 />
    },{
        habName: "CSS",
        habLevel: 50,
        logo: <FaCss3Alt />
    },{
        habName: "Typescript",
        habLevel: 50,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 40,
        logo: <AiFillGithub />
    },{
        habName: "javascript",
        habLevel: 60,
        logo: <IoLogoJavascript />
    },{
        habName: "Html",
        habLevel: 60,
        logo: <FaHtml5 />
    },{
        habName: "CSS",
        habLevel: 50,
        logo: <FaCss3Alt />
    },{
        habName: "Typescript",
        habLevel: 50,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 40,
        logo: <AiFillGithub />
    },{
        habName: "javascript",
        habLevel: 60,
        logo: <IoLogoJavascript />
    },{
        habName: "Html",
        habLevel: 60,
        logo: <FaHtml5 />
    },{
        habName: "CSS",
        habLevel: 50,
        logo: <FaCss3Alt />
    },{
        habName: "Typescript",
        habLevel: 50,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 40,
        logo: <AiFillGithub />
    },{
        habName: "javascript",
        habLevel: 60,
        logo: <IoLogoJavascript />
    },{
        habName: "Html",
        habLevel: 60,
        logo: <FaHtml5 />
    },{
        habName: "CSS",
        habLevel: 50,
        logo: <FaCss3Alt />
    },{
        habName: "Typescript",
        habLevel: 50,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 40,
        logo: <AiFillGithub />
    },{
        habName: "javascript",
        habLevel: 60,
        logo: <IoLogoJavascript />
    },{
        habName: "Html",
        habLevel: 60,
        logo: <FaHtml5 />
    },{
        habName: "CSS",
        habLevel: 50,
        logo: <FaCss3Alt />
    },{
        habName: "Typescript",
        habLevel: 50,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 40,
        logo: <AiFillGithub />
    },{
        habName: "javascript",
        habLevel: 60,
        logo: <IoLogoJavascript />
    },{
        habName: "Html",
        habLevel: 60,
        logo: <FaHtml5 />
    },{
        habName: "CSS",
        habLevel: 50,
        logo: <FaCss3Alt />
    },{
        habName: "Typescript",
        habLevel: 50,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 40,
        logo: <AiFillGithub />
    }
    ],
        

    projects: [
        {
            title: "Bloco de Notas (CRUD)",
            imgPath: "./img/Note_Block.gif",
            techs: "React.js, Node.js, Mysql",
            description: "Um bloco de notas que fiz para praticar um CRUD. fazer chamadas Http e salvar informações no banco de dados.",
            link: "https://github.com/Jefferson13t/Note-block"
        }, {
            title: "Calculadora",
            imgPath: "./img/Nimg_calculadora.png",
            techs: "Javascript, Html, css",
            description: "Segunda versao de uma calculadora que fiz para testar minha evolução. A primeira tinha mais de 200 linhas de codigo, essa apenas 50.",
            link: "https://github.com/Jefferson13t/Calculator_2.0"
        }

    ],

    contact: [
        {
        contactName: "Instagram",
        logo: "",
        link: "",
        },{
        contactName: "Github",
        logo: "",
        link: "",
        },
        {
        contactName: "E-mail",
        logo: "",
        link: "",
        },
        {
        contactName: "linkedin",
        logo: "",
        link: "",
        }
    ]

}