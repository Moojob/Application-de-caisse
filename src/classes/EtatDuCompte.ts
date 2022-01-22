import { IObserver } from "../interfaces/Observer";
import { Caisse } from "./Caisse";

export class Etat implements IObserver{
    private viewEtat : HTMLDivElement
    constructor(caisse : Caisse) {
        this.viewEtat = document.querySelector("#etat")!
        caisse.subscribe(this)
    }
    update(caisse : Caisse) {
       
       if (caisse.getEtatCompte() < 0 ) {
           this.viewEtat.innerText = 'CREDITEUR'
       }else if (caisse.getEtatCompte() === 0) {
           this.viewEtat.innerText = 'NUL'
       } else {
           this.viewEtat.innerText = 'DEBITEUR'
        }
        this.viewEtat.className = this.viewEtat.innerText;
       
        // this.viewEtat.innerText = caisse.getEtatCompte() < 0 ? 'DEBITEUR' : 'CREDITEUR')
         // this.viewEtat.innerText = caisse.getEtatCompte();
    }
}