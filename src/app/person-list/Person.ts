export interface IPerson{
    id: number
    pname: string
    gender: string
    age: number
}

export class Person implements IPerson {
    id: number
    pname: string
    gender: string
    age: number
    constructor(id?:number, pname?: string, gender?:string, age?:number){
        this.id=id;
        this.pname=pname;
        this.gender=gender;
        this.age=age;
    }
}