export class Transaction {
    constructor(
        private type: string,
        private montant: number,
        private qui: string,
        private raison: string
    ) { }
    text() {
        return `${this.montant}F ont été ${this.type === "Debit" ? "Retrait" : "Déposé"} par ${this.qui} suite à ${this.raison}`
    }
    getMontant() {
       return  this.montant
    }
    getType() {
        return  this.type
     }
}