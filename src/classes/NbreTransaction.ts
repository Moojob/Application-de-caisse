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
        let comptons = caisse.getTransaction()
        let NbreTotalDebit = 0;
        let NbreTotalCredit = 0;
        
        NbreTotalDebit = comptons.filter((tr) => tr.getType() === "Debit").length
        NbreTotalCredit = comptons.filter((tr)=>tr.getType() === "Credit").length
        // for (const tr of comptons) {
        //     if (tr.getType() === 'Debit') {
        //         NbreTotalDebit ++
        //     } else {
        //         NbreTotalCredit++
        //     }
        this.htmlNbreDebitView.innerText = NbreTotalDebit.toString();
        this.htmlNbreCreditView.innerText = NbreTotalCredit.toString();
        }
}
