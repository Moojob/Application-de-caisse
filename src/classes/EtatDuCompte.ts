import { IObserver } from "../interfaces/Observer";
import { Caisse } from "./Caisse";

export class Etat implements IObserver{
    private viewEtat : HTMLDivElement
    constructor(caisse : Caisse) {
        this.viewEtat = document.querySelector("#etat")!
        caisse.subscribe(this)
    }
    update(caisse : Caisse) {
        // this.viewEtat.innerText = caisse.getEtatCompte();
        this.viewEtat.innerText = caisse.getEtatCompte() <=0 ? 'DEBITEUR' : 'CREDITEUR';
        this.viewEtat.className = this.viewEtat.innerText;
    }
}