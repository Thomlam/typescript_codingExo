
class Livre {
    titre:string;
    auteur:string;
    ISBN:string;
    nombreDePages:number;
    estEmprunte:boolean;

    constructor(titre:string,auteur:string,ISBN:string,nombreDePages:number,estEmprunte:boolean){
        this.titre = titre;
        this.auteur=auteur;
        this.ISBN=ISBN;
        this.nombreDePages=nombreDePages;
        this.estEmprunte=estEmprunte;
    }

    emprunter(){
        this.estEmprunte = true;
    }
    
    retourner(){
        this.estEmprunte=false;
    }

}

class Bibliothèque{
    livres: Livre[]

    constructor(livres:Livre[]){
        this.livres = livres
    }


    ajouterLivre(livre: Livre){
        this.livres.push(livre)
    }

    chercherParTitre(titre: string){

    }

    emprunterLivre(ISBN: string){

    }

    retournerLivre(ISBN: string){

    }

}