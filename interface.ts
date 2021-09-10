interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const messi: Player = {
    name:'Lionel Messi',
    club:'PSG',
    salary:3000000,
    wife: 'Antonella'
}

const hannan: Player ={
    name:'Hannan Sarkar',
    club:'Kalabagan',
    salary:20000
}

interface Employee{
    name: string,
    designation: string,
    salary: number
    age: number
}

interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zucker: Developer = {
    name:'Mark Zuckerburg',
    designation:'Facebooker',
    salary: 100000,
    age: 34,
    language: 'JS',
    codeEditor: 'VS Code',
    typingSpeed: 70
}