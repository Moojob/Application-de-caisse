export class caisse {
    constructor(solde, transaction) {
        this.solde = solde;
        this.transaction = transaction;
    }
    getTransaction() {
        return this.transaction;
    }
    getSolde() {
        return this.solde;
    }
    AjoutTransaction(transaction) {
        this.transaction.push(transaction);
        if (transaction.getType() === 'Debit') {
            this.solde -= transaction.getMontant();
        }
        else {
            this.solde += transaction.getMontant();
        }
    }
}
