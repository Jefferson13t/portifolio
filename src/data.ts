interface datas {
    resume: string,
    skills: skills[],
    projects: projects[],
    contact: contact[]
}

export interface skills {
    habName: string,
    habLevel: number,
    logoPath: string
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
    logoPath: string,
    link: string,
    }

export const data: datas = {
    resume: "Minha historia com a programacao comecou com meu amor por jogos",
    skills: [{
        habName: "React",
        habLevel: 1,
        logoPath: "" 
    },{
        habName: "Node",
        habLevel: 1,
        logoPath: "" 
    },{
        habName: "javascript",
        habLevel: 3,
        logoPath: "" 
    },{
        habName: "html",
        habLevel: 3,
        logoPath: "" 
    },{
        habName: "css",
        habLevel: 1,
        logoPath: "" 
    },{
        habName: "Typescript",
        habLevel: 1,
        logoPath: "" 
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
        logoPath: "",
        link: "",
        },{
        contactName: "Github",
        logoPath: "",
        link: "",
        },
        {
        contactName: "E-mail",
        logoPath: "",
        link: "",
        },
        {
        contactName: "linkedin",
        logoPath: "",
        link: "",
        }
    ]

}