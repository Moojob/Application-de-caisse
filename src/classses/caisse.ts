import {Transaction} from "./transaction.js"
export class caisse {
    constructor(
        private solde: number,
        private transaction: Transaction[]
    ) { }
    getTransaction() {
        return this.transaction
    }
    getSolde() {
        return this.solde
    }
    AjoutTransaction(transaction: Transaction) {
        this.transaction.push(transaction)
        if (transaction.getType() === 'Debit') {
            this.solde -= transaction.getMontant()
         
        } else {
            this.solde += transaction.getMontant()    
        }
    }
}