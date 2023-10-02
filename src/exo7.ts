
interface Pet{
    name:string;
    age:number;
    speak: () => string;

}

class Dog implements Pet{
    name: string;
    age: number;
    
    constructor(name:string,
        age:number){
            this.name=name
            this.age=age;

    }

    speak(): string {
        return "Woof!"
    }

}

class Cat implements Pet{

    name: string;
    age: number;
    
    constructor(name:string,
        age:number){
            this.name=name
            this.age=age;

    }

    speak(): string {
        return "Meow!"
    }

}

class Parrot implements Pet{

  name: string;
  age: number;
  words: string[];

  constructor(name: string, age: number, words: string[]) {
    this.name = name;
    this.age = age;
    this.words = words;
  }

  speak(): string {
    return this.words.join(", ");
  }

}

new Dog("Rex",10);
new Cat("Catty",10);
new Parrot("Perok",10,["Coucou","Salut","Banane"]);

