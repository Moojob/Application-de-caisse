
import { IObserver } from "../interfaces/Observer";
import { Caisse } from "./Caisse";

export class Solde implements IObserver{
    private viewSolde : HTMLDivElement
    constructor(caisse : Caisse) {
        this.viewSolde = document.querySelector("#solde")!
        caisse.subscribe(this)
    }
    update(caisse : Caisse) {
        this.viewSolde.innerText = caisse.getSolde().toString();
   
    }
}