import { IObserver } from "../interfaces/Observer";
import { ISubject } from "../interfaces/Subject"
import { Transaction } from "./Transaction"

export class Caisse implements ISubject {
   private observers: IObserver[]=[];
    subscribe(obs: IObserver) {
        this.observers.push(obs)
    }
    unsubscribe(obs: IObserver) {
        let index = this.observers.indexOf(obs)
        this.observers.splice(index, 1)
   }
    notifyObserver() {
        for (const elm of this.observers) {
           elm.update(this)
       }
   }
    constructor(
        private solde: number,
        private transaction: Transaction[],
       
    ) { }
    getTransaction() {
        return this.transaction
    }
    getSolde() {
        return this.solde
    }
    getEtatCompte() {
        return this.solde
    }
    AjoutTransaction(transaction: Transaction) {
        this.transaction.push(transaction)
        if (transaction.getType() === 'Debit') {
            this.solde -= transaction.getMontant()
            
        } else {
            this.solde += transaction.getMontant()    
        } console.log("Solde : ", this.solde);
        this.notifyObserver();
    }

    EtatCompte(transaction: Transaction) {
        this.transaction.push(transaction)
        if (this.solde < 0) {
         console.log( 'DEBITEUR');  
            
        } else if (this.solde === 0){ 
           console.log('NULL'); 
        } else { 
            console.log('CREDITEUR'); 
         } 
        this.notifyObserver();
    }
}