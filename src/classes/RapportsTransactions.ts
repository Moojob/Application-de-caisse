import { IObserver } from "../interfaces/Observer";
import { Caisse } from "./Caisse";

export class RapportsTransactions implements IObserver {
  private htmlRapportsContainer: HTMLTableElement;

  constructor(caisse: Caisse) {
    this.htmlRapportsContainer = document.querySelector(
      "#transactionParEmploye"
    )!;
    caisse.subscribe(this);
  }

  update(caisse: Caisse): void {
    let transactions = caisse.getTransaction();
    let rapportsArray = [];
    for (let tr of transactions) {
      let how = rapportsArray.filter((e) => e.name === tr.otherText()).length;
      if (how === 0) {
        let employee = {
          name: tr.otherText(),
          debit: tr.getType() === "Debit" ? tr.getMontant() : 0,
          credit: tr.getType() === "Credit" ? tr.getMontant() : 0,
        };
        rapportsArray.push(employee);
      } else {
        let index = rapportsArray.findIndex(
          (element) => element.name === tr.otherText()
        )
        if (tr.getType() === "Debit") {
          rapportsArray[index].debit += tr.getMontant();
        } else {
          rapportsArray[index].credit += tr.getMontant();
        }
      }
    }
    this.htmlRapportsContainer.innerHTML = `<tr>
        <th>PERSONNELS</th>
        <th>DEBIT</th>
        <th>CREDIT</th>
      </tr>`;
    for (let rapport of rapportsArray) {
      let nom = document.createElement("td");
      let CrediT = document.createElement("td");
      CrediT.className = 'Credit'
      let DebiT = document.createElement("td");
      DebiT.className = 'Debit'
      nom.innerText = rapport.name;
      CrediT.innerText = rapport.credit.toString();
      DebiT.innerText = rapport.debit.toString();
      let tr = document.createElement("tr");
      tr.append(nom);
      tr.append(CrediT);
      tr.append(DebiT);
      this.htmlRapportsContainer.append(tr);
    }
  }
}
