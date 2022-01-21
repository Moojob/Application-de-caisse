import { Caisse } from "./classes/Caisse";
import { Etat } from "./classes/EtatDuCompte";
import { NbreTransaction } from "./classes/NbreTransaction";
import { Solde } from "./classes/Solde";
import { Transaction } from "./classes/Transaction";

//Interception du formulaire
const form = document.querySelector(".formulaire-de-transaction") as HTMLFormElement;
//Instanciations
let maCaisse = new Caisse(0, []);
let monSolde = new Solde(maCaisse);
let etatDeMonCompte = new Etat(maCaisse);
let nbreDeTransaction = new NbreTransaction(maCaisse);

//Interception des Inputs du formulaire
const type = document.querySelector("#type") as HTMLInputElement;
const qui = document.querySelector('#qui') as HTMLInputElement;
const montant = document.querySelector("#montant") as HTMLInputElement;
const raison = document.querySelector("#raison") as HTMLInputElement;

const ul = document.querySelector("ul")!;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  let mesTransactions = new Transaction(
      type.value,
      montant.valueAsNumber,
      qui.value,
      raison.value
  );
  maCaisse.AjoutTransaction(mesTransactions);
  maCaisse.EtatCompte(mesTransactions);
  
  const render = (Tr:Transaction, container: HTMLUListElement) => {
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    h4.innerText = Tr.getType() === 'Debit' ? 'Debit' : 'Credit';
    h4.className = Tr.getType();
    li.className = Tr.getType();
    p.innerText = Tr.text();
    li.append(h4);
    li.append(p);
    ul.append(li);
    container.append(li);
  };
  const reset = 0;
  montant.valueAsNumber = reset;
  qui.value = "";
  raison.value = "";
  render(mesTransactions, ul);
});