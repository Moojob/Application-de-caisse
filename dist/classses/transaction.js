export class Transaction {
    constructor(type, montant, qui, raison) {
        this.type = type;
        this.montant = montant;
        this.qui = qui;
        this.raison = raison;
    }
    text() {
        return `${this.montant}F ont été ${this.type === "Debit" ? "Retrait" : "Déposé"} par ${this.qui} suite à ${this.raison}`;
    }
    getMontant() {
        return this.montant;
    }
    getType() {
        return this.type;
    }
}
