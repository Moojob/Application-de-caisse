import { IObserver } from "../interfaces/Observer";
import { Caisse } from "./Caisse";

export class NbreTransaction implements IObserver {
    
    private htmlNbreDebitView: HTMLTableCellElement
    private htmlNbreCreditView: HTMLTableCellElement

    constructor(caisse : Caisse) {
        this.htmlNbreDebitView = document.querySelector('#nbreDeDebit')!
        this.htmlNbreCreditView = document.querySelector('#nbreDeCredit')!
        caisse.subscribe(this)
    }
    
    
    update(caisse: Caisse): void {

        let compteur = caisse.getTransaction()
       
        var NbreTotalDebit = caisse.getNbreDebit()
        var NbreTotalCredit = caisse.getNbreCredit()
        
    //     if (NbreTotalDebit !== 0 ) {
    //           NbreTotalDebit = (compteur.filter((tr) => tr.getType() === "Debit").length); 
    //     } else {
              
    //     }
    //     if (NbreTotalCredit !== 0 ) {
    //         NbreTotalCredit = (compteur.filter((tr) => tr.getType() === "Debit").length); 
    //   } else {
            
    //   }
    //  for (let tr of compteur) {
    //         if (tr.getType() === 'Debit') {
    //         NbreTotalDebit++
    //         } else {
    //          NbreTotalCredit++
    //         }
    //     }
        this.htmlNbreDebitView.innerText = NbreTotalDebit.toString();
        this.htmlNbreCreditView.innerText = NbreTotalCredit.toString();
    }
}