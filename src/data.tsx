import { ReactNode } from "react"
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa"
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript} from 'react-icons/si'
import {AiOutlineInstagram, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {SiMysql} from 'react-icons/si'
import profile from './img/Profile.jpeg'


interface datas {
    about: about,
    skills: skills[],
    projects: projects[],
    contact: contact[],
    credits: string
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
    perfil: string,
    logo: ReactNode,
    link?: string,
    }

interface about {
    img: string, 
    resume: string[]
}
    

export const data: datas = {
    about: {
        img: profile, 
        resume: [
            "Olá! Meu nome é Jefferson, sou um dev front-end de belo horizonte.",
" Sou apaixonado por música, jogos e tecnologia.",
"Atualmente trabalho com desenvolvimento front-end com a linguagem Javascript, com um pezinho no back-end com o Node.js",
"Minha história com a programação começou quando era adolescente. Com o sonho de criar o meu próprio jogo, acabei conhecendo o mundo do desenvolvimento, escolhendo o Javascript como linguagem.",
"Esse site foi feito para mostrar algumas das minhas habilidades e projetos."

            ]
    },
    skills: [{
        habName: "React",
        habLevel: 40,
        logo: <FaReact />
    },{
        habName: "Node",
        habLevel: 30,
        logo: <FaNode />
    },{
        habName: "Javascript",
        habLevel: 70,
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
        habLevel: 10,
        logo: <SiTypescript />
    },{
        habName: "GitHub ",
        habLevel: 30,
        logo: <AiFillGithub />
    },{
        habName: "Mysql ",
        habLevel: 10,
        logo: <SiMysql />
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
            perfil: "jeferson_souuza",
        logo: <AiOutlineInstagram />,
        link: "https://www.instagram.com/jeferson_souuza/",
        },{
            perfil: "jefferson13t",
        logo: <AiFillGithub />,
        link: "https://github.com/Jefferson13t",
        },
        {
            perfil: "jefersonpereira1331@gmail.com",
        logo: <HiOutlineMail />,
        },
        {
            perfil: "jefferson-pereira-845807181",
        logo: <AiOutlineLinkedin />,
        link: "https://www.linkedin.com/in/jefferson-pereira-845807181/",
        }
    ],
    credits: "Obrigado pelo seu tempo! Sinta-se livre para entrar em contato comigo usando uma das redes a seguir."
  
}